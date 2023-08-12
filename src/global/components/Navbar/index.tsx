import { ChevronLeft } from 'lucide-react-native';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import { logoDark } from '../../../assets/images';
import { theme } from '../../theme/theme';
import { styles } from './styles';

export function Navbar() {
  return (
    <View style={styles.navbar}>
      <Button
        rippleColor={theme.colors.ripplePrimary}
        icon={() => <ChevronLeft color={theme.colors.dark} />}
        onPress={() => console.log('Voltar')}>
        <Image source={logoDark} />
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
