import { FC } from 'react'
import { makeStyles } from '@rneui/themed'
import { View, ViewProps } from 'react-native'

const Grid: FC<ViewProps> = ({ style, children }) => {
  const styles = useStyles()

  return <View style={[styles.root, style]}>{children}</View>
}

export default Grid

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: theme.spacing.sm * -1,
  },
}))
