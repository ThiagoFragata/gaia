import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  View,
  useColorScheme,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Headphones, Info } from 'lucide-react-native';
import { Button, Text } from 'react-native-paper';

import { kubaWorld } from '../../../assets/images';
import { Navbar } from '../../../global/components/Navbar';
import { theme } from '../../../global/theme/theme';
import { normalize } from '../../../utils/normalize';
import { BluetoothBar } from './../components/bluetoothBar';
import { styles } from './../styles/styles';

export default function Device() {
  const isDarkMode = useColorScheme() === 'dark';
  // const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Navbar />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 16 }}
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <Image
            source={kubaWorld}
            style={{
              resizeMode: 'contain',
              alignSelf: 'center',
              height: 300,
            }}
          />
          <Text
            variant="titleLarge"
            style={{
              alignSelf: 'center',
              textTransform: 'uppercase',
              letterSpacing: 8,
            }}>
            Kuba Disco
          </Text>
        </View>

        <BluetoothBar />

        <View style={styles.equalizer}>
          <Text variant="titleMedium">Equalizador</Text>
        </View>

        <View style={styles.displayButtons}>
          <Button
            contentStyle={{
              paddingVertical: normalize(16),
            }}
            style={{
              flex: 1,
            }}
            buttonColor={theme.colors.primary}
            textColor={theme.colors.dark}
            icon={() => <Headphones color={theme.colors.dark} />}
            mode="contained"
            onPress={() => console.log('Suporte')}>
            Suporte
          </Button>

          <Button
            contentStyle={{
              paddingVertical: normalize(16),
            }}
            style={{
              flex: 1,
            }}
            buttonColor={theme.colors.primary}
            textColor={theme.colors.dark}
            icon={() => <Info color={theme.colors.dark} />}
            mode="contained"
            onPress={() => console.log('Tutoriais de uso')}>
            Tutoriais de uso
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
