import { MantineColorScheme, MantineProvider } from '@mantine/core';
import React, { useState } from 'react';
import { darkTheme, lightTheme } from '@/theme';

export const CustomMantineProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorScheme, setColorScheme] = useState<MantineColorScheme>('dark');

  const theme = colorScheme === 'light' ? lightTheme : darkTheme;

  // const toggleColorScheme = (value?: MantineColorScheme) => {
  //   setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  // };

  return (
    <MantineProvider
      theme={theme}
      forceColorScheme={colorScheme}
      colorScheme={colorScheme}
      withGlobalStyles
      withNormalizeCSS
    >
      {children}
    </MantineProvider>
  );
};
