import { createTheme } from '@rneui/themed'
import type { CreateThemeOptions } from '@rneui/themed'
import { commonColors, fonts, lightColors } from './base'

export const theme: CreateThemeOptions = createTheme({
  lightColors: {
    primary: lightColors.primary.main,
    secondary: lightColors.secondary.main,
    tertiary: lightColors.pink,
    neutral0: commonColors.neutral0,
    neutral10: commonColors.neutral10,
    neutral20: commonColors.neutral20,
    neutral30: commonColors.neutral30,
    neutral40: commonColors.neutral40,
    neutral50: commonColors.neutral50,
    neutral60: commonColors.neutral60,
    neutral70: commonColors.neutral70,
    neutral80: commonColors.neutral80,
    neutral90: commonColors.neutral90,
    neutral100: commonColors.neutral100,
    blue: lightColors.blue,
    lightBlue: lightColors.lightBlue,
    orange: lightColors.orange,
    pink: lightColors.pink,
    violet: lightColors.violet,
    yellow: lightColors.yellow,
  },
  mode: 'light',
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  components: {
    Text: {
      h1Style: {
        fontFamily: fonts.primary,
        fontSize: 48,
        lineHeight: 60,
        textTransform: 'uppercase',
        includeFontPadding: false,
      },
      h2Style: {
        fontFamily: fonts.primary,
        fontSize: 40,
        lineHeight: 50,
        textTransform: 'uppercase',
        includeFontPadding: false,
      },
      h3Style: {
        fontFamily: fonts.primary,
        fontSize: 32,
        lineHeight: 40,
        textTransform: 'uppercase',
        includeFontPadding: false,
      },
      h4Style: {
        fontFamily: fonts.primary,
        fontSize: 24,
        lineHeight: 30,
        textTransform: 'uppercase',
        includeFontPadding: false,
      },
    },
    Button: {
      radius: 0,
      titleStyle: {
        fontFamily: fonts.primary,
        paddingVertical: 0,
      },
    },
  },
})
