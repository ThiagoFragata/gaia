import { ChevronLeft } from 'lucide-react-native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Avatar, Button, Text } from 'react-native-paper';
import useTheme from '../../hooks/useTheme';
import { styles } from './styles';

export function Navbar() {
  const { theme } = useTheme();

  return (
    <View style={styles.navbar}>
      <Button
        rippleColor={theme.colors.ripplePrimary}
        icon={() => <ChevronLeft color={theme.colors.light} />}
        onPress={() => console.log('Voltar')}>
        <Text variant="labelLarge">Voltar</Text>
      </Button>
      <TouchableOpacity onPress={() => console.log('Perfil')}>
        <Avatar.Text
          size={40}
          label="TH"
          style={{ backgroundColor: theme.colors.light }}
        />
      </TouchableOpacity>
    </View>
  );
}
