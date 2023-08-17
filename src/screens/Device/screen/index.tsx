import React from 'react';
import { Image, ScrollView, StatusBar, View } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { Headphones, Info } from 'lucide-react-native';
import { Button, Text } from 'react-native-paper';

import { kubaWorld } from '../../../assets/images';
import { Navbar } from '../../../global/components/Navbar';
import useTheme from '../../../global/hooks/useTheme';
import { normalize } from '../../../utils/normalize';
import { BluetoothBar } from './../components/bluetoothBar';
import { styles } from './../styles/styles';

export default function Device() {
  // const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const { theme, isMode } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <StatusBar
        barStyle={isMode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />

      <Navbar />

      <ScrollView
        contentContainerStyle={{ paddingBottom: insets.bottom }}
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

        <View
          style={[
            styles.equalizer,
            { backgroundColor: theme.colors.background },
          ]}>
          <Text variant="titleMedium">Dispositivos encontrados</Text>
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
