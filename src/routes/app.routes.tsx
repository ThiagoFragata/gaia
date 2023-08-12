import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Headphones, Home as IconHome } from 'lucide-react-native';
import React from 'react';
import { useColorScheme } from 'react-native/';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Device from '../screens/Device/screen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export type RootStackParamList = {
  Home: undefined;
  Device: undefined;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function BottomTabs() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarActiveTintColor: isDarkMode ? Colors.lighter : Colors.darker,
        // tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Inicio"
        component={Device}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <IconHome size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Headset"
        component={Device}
        options={{
          tabBarLabel: 'Headset',
          tabBarIcon: ({ color, size }) => (
            <Headphones size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Device" component={Device} />
    </Stack.Navigator>
  );
}
