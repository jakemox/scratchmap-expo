import { FC } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import ScratchMap from '../components/ScratchMap'

const MapScreen: FC = () => {
  return (
    <View style={styles.rootContainer}>
      <StatusBar style='light' />
      <View style={styles.container}>
        <ScratchMap />
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '100%',
    width: '100%',
  },
})
