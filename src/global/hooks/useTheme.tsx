import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useColorScheme } from 'react-native';
import { themeDark, themeLight } from '../theme/theme';

interface ITheme {
  colors: IColors;
}

interface IColors {
  background: string;
  dark: string;
  light: string;
  primary: string;
  ripplePrimary: string;
}

interface ThemeContextData {
  isMode: string;
  theme: ITheme;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isMode, setMode] = useState('light');
  const [theme, setTheme] = useState(themeLight);

  const isDarkModeSelect = useColorScheme() === 'dark';

  useEffect(() => {
    if (isDarkModeSelect) {
      setMode('dark');
      setTheme(themeDark);
    }
  }, [isDarkModeSelect]);

  return (
    <ThemeContext.Provider
      value={{
        isMode,
        theme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default () => useContext(ThemeContext);
