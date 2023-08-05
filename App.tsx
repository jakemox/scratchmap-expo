import { StyleSheet } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { useFonts } from 'expo-font'
import {
  JosefinSans_400Regular,
  JosefinSans_700Bold,
} from '@expo-google-fonts/josefin-sans'
import {
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
} from '@expo-google-fonts/raleway'

import { theme } from './styles/theme'

// import { SafeAreaView } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Navigation from './navigation'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

export default function App() {
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold,
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    // TODO SafeAreaProvider
    <PaperProvider theme={theme}>
      <GestureHandlerRootView style={styles.rootContainer}>
        <BottomSheetModalProvider>
          <Navigation />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </PaperProvider>
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
