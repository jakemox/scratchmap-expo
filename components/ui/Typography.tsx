import { StyleSheet } from 'react-native'
import { Text, TextProps } from 'react-native-paper'

export const Display1 = ({ style, ...rest }: TextProps<Text>) => {
  return (
    <Text style={[style, styles.heading]} variant='displayLarge' {...rest} />
  )
}

export const Display2 = ({ style, ...rest }: TextProps<Text>) => {
  return (
    <Text style={[style, styles.heading]} variant='displayMedium' {...rest} />
  )
}

export const Display3 = ({ style, ...rest }: TextProps<Text>) => {
  return (
    <Text style={[style, styles.heading]} variant='displaySmall' {...rest} />
  )
}

export const H1 = ({ style, ...rest }: TextProps<Text>) => {
  return (
    <Text style={[style, styles.heading]} variant='headlineLarge' {...rest} />
  )
}

export const H2 = ({ style, ...rest }: TextProps<Text>) => {
  return (
    <Text style={[style, styles.heading]} variant='headlineMedium' {...rest} />
  )
}

export const H3 = ({ style, ...rest }: TextProps<Text>) => {
  return (
    <Text style={[style, styles.heading]} variant='headlineSmall' {...rest} />
  )
}

const styles = StyleSheet.create({
  heading: {
    textTransform: 'uppercase',
  },
})
