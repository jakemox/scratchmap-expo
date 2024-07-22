import { StyleSheet } from 'react-native'
import type { TextProps } from 'react-native-paper'
import { Text } from 'react-native-paper'

const Typography = ({ style, variant, ...rest }: TextProps<Text>) => {
  const isHeading =
    variant && ['display', 'headline'].some((v) => variant.includes(v))

  return (
    <Text
      style={[isHeading && styles.heading, style]}
      variant={variant}
      {...rest}
    />
  )
}

export default Typography

const styles = StyleSheet.create({
  heading: {
    textTransform: 'uppercase',
    // TODO Theme Spacer
    marginBottom: 16,
    includeFontPadding: false,
  },
})
