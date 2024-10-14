import { StyleSheet } from 'react-native'
import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

import { useFonts } from 'expo-font'
// TODO Uninstall josefin
import { Jost_600SemiBold } from '@expo-google-fonts/jost'
import {
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
} from '@expo-google-fonts/raleway'

import { theme } from '../styles/theme'

import { ThemeProvider } from '@rneui/themed'

export default function RootLayout() {
  const [loaded] = useFonts({
    Jost_600SemiBold,
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
  })

  if (!loaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={styles.rootContainer}>
        <BottomSheetModalProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  // tabBar: {
  //   backgroundColor: '#003D3F',
  // },
  // tabBarLabel: {
  //   fontWeight: 'bold',
  // },
})
