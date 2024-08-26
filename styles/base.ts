export const baseFontSize = 16

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

export const colors = {
  blue: {
    light: '#b5d5d7',
    mid: '#669db3',
    dark: '#17658f',
  },
  green: {
    light: '#c6e2d1',
    mid: '#8fbfa9',
    dark: '#1c6e70',
  },
  orange: {
    light: '#fdecb3',
    mid: '#ebbe84',
    dark: '#d9734e',
  },
  red: {
    light: '#fbd1d8',
    mid: '#ce8385',
    dark: '#a13532',
  },
  purple: {
    light: '#e4D7ea',
    mid: '#cdafd5',
    dark: '#9c6cb2',
  },
} as const

// export const darkColors = {
//   ...lightColors,
// } as const

export const fonts = {
  primary: 'Jost_600SemiBold',
} as const
