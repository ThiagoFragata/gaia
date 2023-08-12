import { Zap } from 'lucide-react-native';

import React from 'react';

import { View, useColorScheme } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { theme } from '../../../../global/theme/theme';
import { styles } from '../../styles/styles';

export function BluetoothBar() {
  const isDarkMode = useColorScheme() === 'dark';

  let isConnected = true;

  return (
    <View style={styles.connectDevice}>
      <Text>{isConnected ? 'Conectado' : 'Desconectado'}</Text>

      {isConnected && (
        <View style={styles.battery}>
          <Zap color={isDarkMode ? theme.colors.light : theme.colors.dark} />
          <Text style={{ alignSelf: 'center' }}>100%</Text>
        </View>
      )}

      <Button
        textColor={isDarkMode ? theme.colors.light : theme.colors.dark}
        rippleColor={theme.colors.ripplePrimary}
        onPress={() => console.log('Desconectar')}>
        {isConnected ? 'Desconectar' : 'Conectar'}
      </Button>
    </View>
  );
}
