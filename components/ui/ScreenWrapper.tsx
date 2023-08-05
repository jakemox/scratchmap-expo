import { StatusBar } from 'expo-status-bar'
import { FC } from 'react'
import {
  ScrollView,
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native'
import { useAppTheme } from '../../styles/theme'
import { SafeAreaView } from 'react-native-safe-area-context'

type ScreenWrapperProps = ScrollViewProps & {
  children: React.ReactNode
  withScrollView?: boolean
  style?: StyleProp<ViewStyle>
  contentContainerStyle?: StyleProp<ViewStyle>
}

const ScreenWrapper: FC<ScreenWrapperProps> = ({
  children,
  withScrollView = true,
  style,
  contentContainerStyle,
  ...rest
}) => {
  const theme = useAppTheme()
  const containerStyle = [
    styles.container,
    {
      backgroundColor: theme.colors.background,
    },
  ]

  return (
    <>
      {withScrollView ? (
        <SafeAreaView style={[styles.rootScreen, containerStyle]}>
          <ScrollView
            {...rest}
            contentContainerStyle={contentContainerStyle}
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
            style={style}
          >
            {children}
          </ScrollView>
        </SafeAreaView>
      ) : (
        <SafeAreaView style={containerStyle}>
          <View style={style}>{children}</View>
        </SafeAreaView>
      )}
    </>
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
