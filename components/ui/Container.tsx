import { makeStyles } from '@rneui/themed'
import { View } from 'react-native'
import type { ViewProps } from 'react-native'

interface ContainerProps extends ViewProps {
  noMargin?: boolean
}

const Container = ({ noMargin, style, children, ...rest }: ContainerProps) => {
  const styles = useStyles({ noMargin })

  return (
    <View style={[styles.root, style]} {...rest}>
      {children}
    </View>
  )
}

export default Container

const useStyles = makeStyles((theme, { noMargin }: ContainerProps) => ({
  root: {
    paddingHorizontal: noMargin ? 0 : theme.spacing.md,
  },
}))
