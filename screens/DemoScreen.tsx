import { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import ScreenWrapper from '../components/ui/ScreenWrapper'
import Typography from '../components/ui/Typography'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
// import Svg, { Path } from 'react-native-svg'
// import { Flag } from 'react-native-svg-flagkit-typescript'

const DemoScreen: FC = () => {
  return (
    <ScreenWrapper>
      <StatusBar style='dark' />
      <Container style={styles.rootContainer}>
        {/* <Flag id={'JP'} width={100} height={100} /> */}
        {/* <Svg width={20} height={20} viewBox='0 0 20 20'>
          <Path d='M16.993 6.667H3.227l6.883 6.883 6.883-6.883z' fill='#000' />
        </Svg> */}
        <Typography variant='displayLarge'>Display Large j</Typography>
        <Typography variant='displayMedium'>Display Medium</Typography>
        <Typography variant='displaySmall'>Display Small j</Typography>
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
