import { StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
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

import { theme } from './styles/theme'

import Navigation from './navigation'
import { ThemeProvider } from '@rneui/themed'

export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <GestureHandlerRootView style={styles.rootContainer}>
          <BottomSheetModalProvider>
            <Navigation />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </SafeAreaProvider>
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
