import { StyleSheet, View, ViewProps } from 'react-native'

type GridProps = ViewProps & {}

const Grid = ({ style, children }: GridProps) => {
  return <View style={[styles.root, style]}>{children}</View>
}

export default Grid

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -8,
  },
})
