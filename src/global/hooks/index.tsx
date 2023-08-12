import React, { ReactNode } from 'react';
import { PaperProvider } from 'react-native-paper';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <PaperProvider>{children}</PaperProvider>;
};
