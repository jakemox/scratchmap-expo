import { StyleSheet, View, ViewProps } from 'react-native'

type ItemProps = ViewProps & {
  cols?: number
  offset?: number
}

const Item = ({ cols = 12, offset, style, children }: ItemProps) => {
  return (
    <View
      style={[
        {
          flexBasis: `${(100 / 12) * cols}%`,
          maxWidth: `${(100 / 12) * cols}%`,
          marginLeft: offset ? `${(100 / 12) * offset}%` : undefined,
        },
        styles.root,
        style,
      ]}
    >
      {children}
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 8,
    flexGrow: 1,
  },
})
