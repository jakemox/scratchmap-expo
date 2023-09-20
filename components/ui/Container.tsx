import { View, StyleSheet, ViewProps } from 'react-native'
import { useAppTheme } from '../../styles/theme'

type ContainerProps = ViewProps & {
  noMargin?: boolean
}

const Container = ({ noMargin, style, children, ...rest }: ContainerProps) => {
  const theme = useAppTheme()

  return (
    <View
      style={[
        { paddingHorizontal: noMargin ? 0 : theme.spacing(4) },
        // styles.root,
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  )
}

export default Container

const styles = StyleSheet.create({
  root: {
    // flex: 1,
  },
})
