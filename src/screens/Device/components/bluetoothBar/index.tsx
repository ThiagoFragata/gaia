import { Zap } from 'lucide-react-native';

import React, { useEffect } from 'react';

import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import useBle from '../../../../global/hooks/useBle';
import useTheme from '../../../../global/hooks/useTheme';
import { styles } from '../../styles/styles';

export function BluetoothBar() {
  const { theme } = useTheme();

  let isConnected = false;

  const { requestPermissions, WaitingPowered, allDevices, onScanDevices } =
    useBle();

  useEffect(() => {
    requestPermissions(async (isGranted: boolean) => {
      if (isGranted) {
        WaitingPowered();
      }
    });
  }, [WaitingPowered, requestPermissions]);

  console.log(allDevices);

  return (
    <View
      style={[
        styles.connectDevice,
        { backgroundColor: theme.colors.background },
      ]}>
      <Text>{isConnected ? 'Conectado' : 'Desconectado'}</Text>

      {isConnected && (
        <View style={styles.battery}>
          <Zap color={theme.colors.light} />
          <Text style={{ alignSelf: 'center' }}>100%</Text>
        </View>
      )}

      <Button
        textColor={theme.colors.light}
        rippleColor={theme.colors.ripplePrimary}
        onPress={() => onScanDevices()}>
        {isConnected ? 'Desconectar' : 'Conectar'}
      </Button>
    </View>
  );
}
