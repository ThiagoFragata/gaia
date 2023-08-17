import { useState } from 'react';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import { BleManager, Device } from 'react-native-ble-plx';
import { PERMISSIONS, requestMultiple } from 'react-native-permissions';

import DeviceInfo from 'react-native-device-info';

type PermissionCallback = (result: boolean) => void;

interface BluetoothLowEnergyApi {
  onStopSearch: boolean;
  setStopSearch: React.Dispatch<React.SetStateAction<boolean>>;
  allDevices: Device[];
  connectedDevice: Device | null;

  requestPermissions(callback: PermissionCallback): Promise<void>;
  onScanDevices(): void;
  connectToDevice(device: Device): Promise<void>;
  WaitingPowered(): void;
}
export default function useBle(): BluetoothLowEnergyApi {
  const [onStopSearch, setStopSearch] = useState(false);
  const [connectedDevice, setConnectedDevice] = useState<Device | null>(null);
  const [allDevices, setAllDevices] = useState<Device[]>([]);

  const bleManager = new BleManager();

  const requestPermissions = async (callback: PermissionCallback) => {
    if (Platform.OS === 'android') {
      const apiLevel = await DeviceInfo.getApiLevel();

      if (apiLevel < 31) {
        const grantedStatus = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Permissão de localização',
            message:
              'Bluetooth de baixa energia precisa de permissão de localização',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancelar',
            buttonNeutral: 'Talvez mais tarde',
          },
        );
        callback(grantedStatus === PermissionsAndroid.RESULTS.GRANTED);
      } else {
        const result = await requestMultiple([
          PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
          PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        ]);

        const isAllPermissions =
          result['android.permission.BLUETOOTH_SCAN'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          result['android.permission.BLUETOOTH_CONNECT'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          result['android.permission.ACCESS_FINE_LOCATION'] ===
            PermissionsAndroid.RESULTS.GRANTED;

        callback(isAllPermissions);
      }
    } else {
      callback(true);
    }
  };

  const isDuplicateDevice = (devices: Device[], nextDevice: Device) =>
    devices.findIndex(device => nextDevice.id === device.id) > -1;

  const WaitingPowered = () => {
    const subscription = bleManager.onStateChange(state => {
      if (state === 'PoweredOn') {
        onScanDevices();
        subscription.remove();
      }
    });
  };

  const onScanDevices = () => {
    try {
      bleManager.startDeviceScan(null, null, (error, device) => {
        if (error) {
          console.log('Erro ao procurar dispositivos', error.message);

          if (error.message === 'BluetoothLE is powered off') {
            Alert.alert(
              'Erro ao procurar dispositivos',
              'O Bluetooth está desligado',
            );
          }

          if (error.message === 'Cannot start scanning operation') {
            Alert.alert(
              'Erro ao procurar dispositivo',
              'Não é possível iniciar a operação de digitalização',
            );
            bleManager.destroy();
          }
        }

        if (device?.name === 'Bluetooth') {
          console.log('Dispositivo encontrado', device.id);

          setAllDevices(prevState => {
            if (!isDuplicateDevice(prevState, device)) {
              return [...prevState, device];
            }
            return prevState;
          });
        }
      });
    } catch (error) {
      console.log('CacthError:', error);
    }
  };

  const connectToDevice = async (device: Device) => {
    try {
      const deviceConnection = await bleManager.connectToDevice(device.id);
      setConnectedDevice(deviceConnection);
      bleManager.stopDeviceScan();
    } catch (error: any) {
      console.log('Erro ao conectar ao dispositivo', error.message);
    }
  };

  return {
    onStopSearch,
    setStopSearch,
    allDevices,
    requestPermissions,
    onScanDevices,
    connectToDevice,
    connectedDevice,
    WaitingPowered,
  };
}
