import {
  ScrollView,
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native'
import { useAppTheme } from '../../styles/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

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
  const { style, ...rest } = attr
  const theme = useAppTheme()
  const insets = useSafeAreaInsets()
  const containerStyle = [
    styles.container,
    {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.left,
      backgroundColor: theme.colors.background,
    },
  ]

  return withScrollView ? (
    <ScrollView
      {...rest}
      contentContainerStyle={contentContainerStyle}
      alwaysBounceVertical={false}
      showsVerticalScrollIndicator={false}
      style={[containerStyle, style]}
    >
      {children}
    </ScrollView>
  ) : (
    <View style={[containerStyle, style]}>{children}</View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
})
