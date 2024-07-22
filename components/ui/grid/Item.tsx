import { FC } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

interface ItemProps extends ViewProps {
  cols?: number
  offset?: number
}

const Item: FC<ItemProps> = ({ cols = 12, offset, style, children }) => {
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
