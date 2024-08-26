// import { theme } from '../styles/theme'
// import type { Colors } from '@rneui/themed'

// type ColorKey = keyof Colors

// // const textColorMapping: Record<string, ColorKey> = {
// //   primary: 'neutral0',
// //   secondary: 'neutral0',
// //   success: 'neutral0',
// //   warning: 'text',
// //   error: 'neutral0',
// //   neutral30: 'text',
// // }

// export function getContrastTextColor(color: string): Colors {
//   // switch (color) {
//   //   case 'primary' || 'secondary': {
//   //     return 'neutral0'
//   //   }
//   //   case
//   // }
//   let r = 0,
//     g = 0,
//     b = 0

//   // Else hex code
//   // If a leading # is provided, remove it
//   if (color.slice(0, 1) === '#') {
//     color = color.slice(1)
//   }
//   // Convert to RGB value
//   r = parseInt(color.substring(0, 2), 16)
//   g = parseInt(color.substring(2, 4), 16)
//   b = parseInt(color.substring(4, 6), 16)

//   // Get YIQ ratio
//   const yiq = (r * 299 + g * 587 + b * 114) / 1000

//   // Check contrast
//   return yiq >= 128 ? 'neutral100' : 'neutral0'
// }
// // export function getTextColor(color: keyof TextColorMapping): Colors {
// //   return textColorMapping[color]
// // }
