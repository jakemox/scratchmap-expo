const baseFontSize = 16

export const spacing = (factor: number) => 0.25 * factor * baseFontSize

// TODO Light common colors and dark common colors
export const commonColors = {
  neutral0: '#FFFFFF',
  neutral10: '#FAF9F7',
  neutral20: '#EBE9E1',
  neutral30: '#CFCDC6',
  neutral40: '#B3B1AB',
  neutral50: '#969590',
  neutral60: '#7A7975',
  neutral70: '#5E5D5A',
  neutral80: '#42413F',
  neutral90: '#211F1D',
  neutral100: '#000000',
} as const

export const lightColors = {
  green: '#1c6e70',
  lightGreen: '#8fbfa9',
  red: '#a13532',
  orange: '#d9734e',
  lightOrange: '#ebbe84',
  blue: '#669db3',
  lightBlue: '#b5d5d7',
  pink: '#fbd1d8',
  violet: '#cdafd5',
  yellow: '#fdecb3',
} as const

export const darkColors = {
  ...lightColors,
  text: commonColors.neutral20,
  background: commonColors.neutral90,
} as const

export const fonts = {
  primary: 'Jost_600SemiBold',
} as const

// export const lineHeight = {
//   heading: 1.25,
// }

// export const typography = {
//   headingStyles: {
//     fontFamily: fonts.primary,
//     lineHeightMultiplier: 1.25,
//   },
// }

// export const typography = {
//   displayLarge: {
//     fontFamily: fonts.primary,
//     fontSize: 64,
//     lineHeight: 80,
//   },
//   displayMedium: {
//     fontFamily: fonts.primary,
//     fontSize: 56,
//     lineHeight: 70,
//   },
//   displaySmall: {
//     fontFamily: fonts.primary,
//     fontSize: 48,
//     lineHeight: 60,
//   },
//   headlineLarge: {
//     fontFamily: fonts.primary,
//     fontSize: 40,
//     lineHeight: 50,
//   },
//   headlineMedium: {
//     fontFamily: fonts.primary,
//     fontSize: 32,
//     lineHeight: 40,
//   },
//   headlineSmall: {
//     fontFamily: fonts.primary,
//     fontSize: 24,
//     lineHeight: 30,
//   },
//   labelLarge: {
//     fontFamily: fonts.primary,
//     // lineHeight: 16,
//     fontSize: 16,
//   },
//   // labelLarge: {
//   //   fontFamily: 'Raleway_600SemiBold',
//   //   // lineHeight: 16,
//   //   fontSize: 16,
//   // },
// }
