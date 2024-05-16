// src/theme.ts
import { MantineThemeOverride } from '@mantine/core';

const sharedTheme: MantineThemeOverride = {
  fontFamily: 'Arial, sans-serif',
  headings: {
    fontFamily: 'Helvetica, sans-serif',
    sizes: {
      h1: { fontSize: '2.5rem' },
      h2: { fontSize: '2rem' },
      h3: { fontSize: '1.75rem' },
      h4: { fontSize: '1.5rem' },
      h5: { fontSize: '1.25rem' },
      h6: { fontSize: '1rem' },
    },
  },
  primaryColor: 'brand',
};

export const lightTheme = {
  ...sharedTheme,
  colorScheme: 'light',
  colors: {
    brand: [
      '#f7f7f7',
      '#e3e3e3',
      '#d1d1d1',
      '#b1b1b1',
      '#8f8f8f',
      '#6e6e6e',
      '#4e4e4e',
      '#3a3a3a',
      '#222222',
      '#111111',
    ],
    text: [
      '#111111',
      '#222222',
      '#3a3a3a',
      '#4e4e4e',
      '#6e6e6e',
      '#8f8f8f',
      '#b1b1b1',
      '#d1d1d1',
      '#e3e3e3',
      '#f7f7f7',
    ],
  },
  other: {
    borderColor: '#eaeaea',
    hoverColor: '#f5f5f5',
  },
};

export const darkTheme = {
  ...sharedTheme,
  colorScheme: 'dark',
  colors: {
    brand: [
      '#111111',
      '#222222',
      '#3a3a3a',
      '#4e4e4e',
      '#6e6e6e',
      '#8f8f8f',
      '#b1b1b1',
      '#d1d1d1',
      '#e3e3e3',
      '#f7f7f7',
    ],
    text: [
      '#f7f7f7',
      '#e3e3e3',
      '#d1d1d1',
      '#b1b1b1',
      '#8f8f8f',
      '#6e6e6e',
      '#4e4e4e',
      '#3a3a3a',
      '#222222',
      '#111111',
    ],
  },
  other: {
    borderColor: '#333333',
    hoverColor: '#444444',
  },
};
