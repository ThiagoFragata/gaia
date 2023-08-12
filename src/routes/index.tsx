import 'react-native-gesture-handler';

import React from 'react';

import AppRoutes from './app.routes';

import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../config/rootNavigation';

export function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {user.id !== undefined ? <AppRoutes /> : <AuthRoutes />} */}
      <AppRoutes />
    </NavigationContainer>
  );
}
