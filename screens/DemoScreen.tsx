import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import ScreenWrapper from '../components/ui/ScreenWrapper'
import Typography from '../components/ui/Typography'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

const DemoScreen = () => {
  return (
    <ScreenWrapper>
      <StatusBar style='dark' />
      <Container style={styles.rootContainer}>
        <Typography variant='displayLarge'>Display Large</Typography>
        <Typography variant='displayMedium'>Display Medium</Typography>
        <Typography variant='displaySmall'>Display Small</Typography>
        <Typography variant='headlineLarge'>Headline Large</Typography>
        <Typography variant='headlineMedium'>Headline Medium</Typography>
        <Typography variant='headlineSmall'>Headline Small</Typography>
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
      </Container>
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
