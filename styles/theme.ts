import { DefaultTheme, MD3Theme, useTheme } from 'react-native-paper'

type Theme = MD3Theme & {
  spacing: (factor: number) => number
}

export const theme: Theme = {
  ...DefaultTheme,
  spacing: (factor: number) => 0.25 * factor * 16,
  roundness: 1,
  colors: {
    ...DefaultTheme.colors,
    surface: '#ffffff',
    onSurface: '#42413F',
    background: '#ffffff',
    onBackground: '#42413F',
    primary: '#1c6e70',
    onPrimary: '#ffffff',
    secondary: '#d9734e',
    onSecondary: '#ffffff',
    tertiary: '#fbd1d8',
    onTertiary: '#42413F',
  },
  fonts: {
    ...DefaultTheme.fonts,
    displayLarge: {
      ...DefaultTheme.fonts.displayLarge,
      fontFamily: 'JosefinSans_700Bold',
      // lineHeight: 72,
      // fontSize: 60,
    },
    displayMedium: {
      ...DefaultTheme.fonts.displayMedium,
      fontFamily: 'JosefinSans_700Bold',
      // lineHeight: 72,
      // fontSize: 60,
    },
    displaySmall: {
      ...DefaultTheme.fonts.displaySmall,
      fontFamily: 'JosefinSans_700Bold',
      // lineHeight: 72,
      // fontSize: 60,
    },
    headlineLarge: {
      ...DefaultTheme.fonts.headlineLarge,
      fontFamily: 'JosefinSans_700Bold',
      // lineHeight: 36,
      // fontSize: 32,
    },
    headlineMedium: {
      ...DefaultTheme.fonts.headlineMedium,
      fontFamily: 'JosefinSans_700Bold',
      // lineHeight: 30,
      // fontSize: 28,
    },
    headlineSmall: {
      ...DefaultTheme.fonts.headlineSmall,
      fontFamily: 'JosefinSans_700Bold',
      // lineHeight: 24,
      // fontSize: 24,
    },
    labelLarge: {
      ...DefaultTheme.fonts.labelLarge,
      fontFamily: 'Raleway_600SemiBold',
      // lineHeight: 16,
      fontSize: 16,
    },
  },
}

export const useAppTheme = () => useTheme<Theme>()
