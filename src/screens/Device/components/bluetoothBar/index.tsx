import { Zap } from 'lucide-react-native';

import React from 'react';

import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import useTheme from '../../../../global/hooks/useTheme';
import { styles } from '../../styles/styles';

export function BluetoothBar() {
  const { theme } = useTheme();

  let isConnected = true;

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
        onPress={() => console.log('Desconectar')}>
        {isConnected ? 'Desconectar' : 'Conectar'}
      </Button>
    </View>
  );
}
