import { DefaultTheme, MD3Theme, useTheme } from 'react-native-paper'

interface Theme extends MD3Theme {
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
      fontFamily: 'Jost_600SemiBold',
      fontSize: 60,
      lineHeight: 84,
    },
    displayMedium: {
      ...DefaultTheme.fonts.displayMedium,
      fontFamily: 'Jost_600SemiBold',
      fontSize: 50,
      lineHeight: 70,
    },
    displaySmall: {
      ...DefaultTheme.fonts.displaySmall,
      fontFamily: 'Jost_600SemiBold',
      fontSize: 40,
      lineHeight: 56,
    },
    headlineLarge: {
      ...DefaultTheme.fonts.headlineLarge,
      fontFamily: 'Jost_600SemiBold',
      fontSize: 35,
      lineHeight: 49,
    },
    headlineMedium: {
      ...DefaultTheme.fonts.headlineMedium,
      fontFamily: 'Jost_600SemiBold',
      fontSize: 30,
      lineHeight: 42,
    },
    headlineSmall: {
      ...DefaultTheme.fonts.headlineSmall,
      fontFamily: 'Jost_600SemiBold',
      fontSize: 25,
      lineHeight: 35,
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
