import { ScrollView, ScrollViewProps, StyleProp, View, ViewStyle } from 'react-native'
import { makeStyles } from '@rneui/themed'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import type { EdgeInsets } from 'react-native-safe-area-context'

interface ScreenWrapperProps extends ScrollViewProps {
  withScrollView?: boolean
  contentContainerStyle?: StyleProp<ViewStyle>
}

const ScreenWrapper = ({
  withScrollView = true,
  contentContainerStyle,
  children,
  ...attr
}: ScreenWrapperProps) => {
  const insets = useSafeAreaInsets()
  const styles = useStyles(insets)
  const { style, ...rest } = attr

  return withScrollView ? (
    <ScrollView
      contentContainerStyle={contentContainerStyle}
      alwaysBounceVertical={false}
      showsVerticalScrollIndicator={false}
      style={[styles.root, style]}
      {...rest}
    >
      {children}
    </ScrollView>
  ) : (
    <View style={styles.root}>{children}</View>
  )
}

export default ScreenWrapper

const useStyles = makeStyles((theme, insets: EdgeInsets) => ({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.left,
  },
}))
