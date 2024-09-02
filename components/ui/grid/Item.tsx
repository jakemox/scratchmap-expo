import { FC } from 'react'
import { makeStyles } from '@rneui/themed'
import { View, ViewProps } from 'react-native'

interface ItemProps extends ViewProps {
  cols?: number
  offset?: number
}

const Item: FC<ItemProps> = ({ cols, offset, style, children }) => {
  const styles = useStyles({ cols, offset })

  return <View style={[styles.root, style]}>{children}</View>
}

export default Item

const useStyles = makeStyles((theme, { cols = 12, offset }: ItemProps) => ({
  root: {
    paddingHorizontal: theme.spacing.sm,
    flexGrow: 1,
    flexBasis: `${(100 / 12) * cols}%`,
    maxWidth: `${(100 / 12) * cols}%`,
    marginLeft: offset ? `${(100 / 12) * offset}%` : undefined,
  },
}))
