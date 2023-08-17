import React, { ReactNode } from 'react';
import { PaperProvider } from 'react-native-paper';
import { ThemeProvider } from './useTheme';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <PaperProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </PaperProvider>
  );
};
