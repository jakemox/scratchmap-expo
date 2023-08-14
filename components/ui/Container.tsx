import { View, StyleSheet, ViewProps } from 'react-native'

type ContainerProps = ViewProps & {}

const Container = ({ style, children, ...rest }: ContainerProps) => {
  return (
    <View style={[style, styles.root]} {...rest}>
      {children}
    </View>
  )
}

export default Container

export const styles = StyleSheet.create({
  root: {
    // TODO Theme spacer
    paddingHorizontal: 16,
  },
})
