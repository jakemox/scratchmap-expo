import { FC } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

const Grid: FC<ViewProps> = ({ style, children }) => {
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
