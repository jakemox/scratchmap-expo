import { StyleSheet } from 'react-native'
import { Text, TextProps } from 'react-native-paper'

const Typography = ({ style, variant, ...rest }: TextProps<Text>) => {
  const isHeading =
    variant && ['display', 'headline'].some((v) => variant.includes(v))

  return (
    <Text
      style={[style, isHeading && styles.heading]}
      variant={variant}
      {...rest}
    />
  )
}

export default Typography

const styles = StyleSheet.create({
  heading: {
    textTransform: 'uppercase',
  },
})
