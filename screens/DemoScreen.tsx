import { StyleSheet, View } from 'react-native'

import Button from '../components/ui/Button'
import ScreenWrapper from '../components/ui/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import {
  Display1,
  Display2,
  Display3,
  H1,
  H2,
  H3,
} from '../components/ui/Typography'

const DemoScreen = () => {
  return (
    <ScreenWrapper>
      <StatusBar style='dark' />
      <View style={styles.rootContainer}>
        <Display1>Display 1</Display1>
        <Display2>Display 2</Display2>
        <Display3>Display 3</Display3>
        <H1>Headline 1</H1>
        <H2>Headline 2</H2>
        <H3>Headline 3</H3>
        <View style={styles.row}>
          <Button style={styles.button} mode='contained'>
            Contained Primary
          </Button>
          <Button style={styles.button} mode='elevated'>
            Elevated Primary
          </Button>
          <Button style={styles.button}>Text Primary</Button>
          <Button style={styles.button} mode='outlined'>
            Outlined Primary
          </Button>
          <Button style={styles.button} mode='contained' variant='secondary'>
            Contained Secondary
          </Button>
          <Button style={styles.button} mode='outlined' variant='secondary'>
            Outlined Secondary
          </Button>
          <Button style={styles.button} variant='secondary'>
            Text Secondary
          </Button>
          <Button style={styles.button} mode='contained' variant='tertiary'>
            Contained Tertiary
          </Button>
          <Button style={styles.button} mode='outlined' variant='tertiary'>
            Outlined Tertiary
          </Button>
          <Button
            style={styles.button}
            mode='contained'
            variant='tertiary'
            compact
          >
            Contained Tertiary
          </Button>
          <Button
            style={styles.button}
            mode='outlined'
            variant='tertiary'
            compact
          >
            Outlined Tertiary
          </Button>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default DemoScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  button: {
    margin: 4,
  },
})
