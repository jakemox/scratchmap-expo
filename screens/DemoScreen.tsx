import { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import ScreenWrapper from '../components/ui/ScreenWrapper'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { Text } from '@rneui/themed'
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
        <Text h1>Heading 1</Text>
        <Text h2>Heading 2</Text>
        <Text h3>Heading 3</Text>
        <Text h4>Heading 4</Text>
        <Text>Body</Text>
        <View style={styles.row}>
          <Button
            title='Solid Primary'
            style={styles.button}
            variant='primary'
          />
          {/* <Button style={styles.button}>Text Primary</Button> */}
          {/* <Button style={styles.button}>
            Outlined Primary
          </Button> */}
          <Button
            title='Solid Secondary'
            style={styles.button}
            variant='secondary'
          />
          {/* <Button style={styles.button} mode='outlined' variant='secondary'>
            Outlined Secondary
          </Button> */}
          {/* <Button style={styles.button} variant='secondary'>
            Text Secondary
          </Button> */}
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
