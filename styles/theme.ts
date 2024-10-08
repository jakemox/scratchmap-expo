import { createTheme } from '@rneui/themed'
import type { CreateThemeOptions } from '@rneui/themed'
import { commonColors, fonts, colors } from './base'

export const theme: CreateThemeOptions = createTheme({
  lightColors: {
    primary: colors.orange.dark,
    secondary: colors.green.dark,
    error: colors.red.dark,
    info: colors.blue.mid,
    success: colors.green.mid,
    warning: colors.orange.mid,
    text: commonColors.neutral80,
    textOnBackground: {
      primary: commonColors.neutral0,
      secondary: commonColors.neutral0,
      success: commonColors.neutral0,
      neutral: commonColors.neutral80,
      inverse: commonColors.neutral20,
    },
    background: commonColors.neutral10,
    backgroundInverse: commonColors.neutral90,
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
    decorative: {
      blue: colors.blue.dark,
      blush: colors.red.light,
      coral: colors.red.mid,
      lightBlue: colors.blue.light,
      lightLilac: colors.purple.light,
      lilac: colors.purple.mid,
      mint: colors.green.light,
      orange: colors.orange.mid,
      yellow: colors.orange.light,
      violet: colors.purple.dark,
    },
  },
  darkColors: {
    primary: colors.orange.dark,
    secondary: colors.green.dark,
    success: colors.green.light,
    warning: colors.orange.mid,
    error: colors.red.dark,
    text: commonColors.neutral20,
    // TODO Invert
    textOnBackground: {
      primary: commonColors.neutral0,
      secondary: commonColors.neutral0,
      neutral: commonColors.neutral80,
      inverse: commonColors.neutral20,
    },
    background: commonColors.neutral90,
    backgroundInverse: commonColors.neutral10,
    neutral0: commonColors.neutral100,
    neutral10: commonColors.neutral90,
    neutral20: commonColors.neutral80,
    neutral30: commonColors.neutral70,
    neutral40: commonColors.neutral60,
    neutral50: commonColors.neutral50,
    neutral60: commonColors.neutral40,
    neutral70: commonColors.neutral30,
    neutral80: commonColors.neutral20,
    neutral90: commonColors.neutral10,
    neutral100: commonColors.neutral0,
  },
  // TODO Remove/update when adding dark mode functionality
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
        fontWeight: 600,
        fontSize: 48,
        lineHeight: 60,
        textTransform: 'uppercase',
        includeFontPadding: false,
      },
      h2Style: {
        fontFamily: fonts.primary,
        fontWeight: 600,
        fontSize: 40,
        lineHeight: 50,
        textTransform: 'uppercase',
        includeFontPadding: false,
      },
      h3Style: {
        fontFamily: fonts.primary,
        fontWeight: 600,
        fontSize: 32,
        lineHeight: 40,
        textTransform: 'uppercase',
        includeFontPadding: false,
      },
      h4Style: {
        fontFamily: fonts.primary,
        fontWeight: 600,
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
        fontWeight: 600,
        paddingVertical: 0,
      },
      icon: {
        size: 26.2,
      },
      activeOpacity: 0.5,
    },
    Icon: {
      type: 'material',
    },
  },
})
