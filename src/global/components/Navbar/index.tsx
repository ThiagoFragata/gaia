import { ChevronLeft } from 'lucide-react-native';
import React from 'react';
import { TouchableOpacity, View, useColorScheme } from 'react-native';
import { Avatar, Button, Text } from 'react-native-paper';
import { theme } from '../../theme/theme';
import { styles } from './styles';

export function Navbar() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.navbar}>
      <Button
        rippleColor={theme.colors.ripplePrimary}
        icon={() => (
          <ChevronLeft
            color={isDarkMode ? theme.colors.light : theme.colors.dark}
          />
        )}
        onPress={() => console.log('Voltar')}>
        <Text variant="labelLarge">Voltar</Text>
      </Button>
      <TouchableOpacity onPress={() => console.log('Perfil')}>
        <Avatar.Text
          size={40}
          label="TH"
          style={{ backgroundColor: theme.colors.dark }}
        />
      </TouchableOpacity>
    </View>
  );
}
