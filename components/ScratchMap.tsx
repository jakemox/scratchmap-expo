import { useCallback, useRef, useState } from 'react'
import Mapbox, {
  BackgroundLayer,
  FillLayer,
  MapView,
  VectorSource,
  LineLayer,
  Camera,
} from '@rnmapbox/maps'
import { OnPressEvent } from '@rnmapbox/maps/lib/typescript/types/OnPressEvent'
import CountryFlag from 'react-native-country-flag'

import StyledBottomSheetModal from './ui/StyledBottomSheetModal'
import { Text } from '@rneui/themed'
import Button from './ui/Button'
import Grid from './ui/grid/Grid'
import Item from './ui/grid/Item'
import type { BottomSheetModal } from '@gorhom/bottom-sheet'
import { makeStyles, useTheme } from '@rneui/themed'
import { commonColors, fonts, lightColors } from '../styles/base'

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_KEY || null)

const DEFAULT_SELECTED_COUNTRY = { name: '', code: '' }

const ScratchMap = () => {
  const {
    theme: { colors },
  } = useTheme()
  const styles = useStyles()

  const [selectedCountry, setSelectedCountry] = useState(
    DEFAULT_SELECTED_COUNTRY
  )
  const [visitedCountries, setVisitedCountries] = useState<string[]>([''])

  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  const presentModalHandler = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  const closeModalHandler = useCallback(() => {
    bottomSheetModalRef.current?.close()
    setSelectedCountry(DEFAULT_SELECTED_COUNTRY)
  }, [])

  const countryPressHandler = (event: OnPressEvent) => {
    const { name_en, iso_3166_1 } = event.features[0].properties || {}
    setSelectedCountry({ name: name_en, code: iso_3166_1 })
    presentModalHandler()
    console.log(event.features[0])
  }

  const countryVisitedHandler = () => {
    setVisitedCountries((prevVisitedCountries: string[]) => {
      if (prevVisitedCountries.includes(selectedCountry.code)) {
        return prevVisitedCountries.filter(
          (country) => country !== selectedCountry.code
        )
      } else {
        return [...prevVisitedCountries, selectedCountry.code]
      }
    })
  }

  return (
    <>
      <MapView
        style={styles.map}
        styleURL='mapbox://styles/jakemox99/cli76zhe402re01pg4ur61fx4'
        rotateEnabled={false}
        scaleBarEnabled={false}
        zoomEnabled
        onPress={closeModalHandler}
      >
        <Camera bounds={{ ne: [11.64, -17.93], sw: [24.08, -4.44] }} />
        <VectorSource
          id='countrySource'
          url='mapbox://mapbox.country-boundaries-v1'
          onPress={countryPressHandler}
        >
          <BackgroundLayer
            id='backgroundLayer'
            layerIndex={0}
            style={{ backgroundColor: colors.neutral20 }}
          />
          <FillLayer
            id='fillLayer'
            sourceID='countrySource'
            sourceLayerID='country_boundaries'
            layerIndex={1}
            style={{ fillColor: colors.neutral10 }}
          />
          <FillLayer
            id='visitedFillLayer'
            sourceID='countrySource'
            sourceLayerID='country_boundaries'
            filter={[
              'all',
              ['==', ['get', 'disputed'], 'false'],
              [
                'any',
                ['==', 'all', ['get', 'worldview']],
                ['in', 'US', ['get', 'worldview']],
              ],
            ]}
            belowLayerID='country-labels-md'
            style={{
              fillColor: [
                'step',
                ['get', 'color_group'],
                colors.orange,
                2,
                colors.yellow,
                3,
                colors.blue,
                4,
                colors.lightBlue,
                5,
                colors.violet,
                6,
                colors.pink,
                7,
                colors.orange,
              ],
              fillOpacity: [
                'match',
                ['get', 'iso_3166_1'],
                visitedCountries,
                1,
                0,
              ],
            }}
          />
          <FillLayer
            id='highlightFillLayer'
            sourceID='countrySource'
            sourceLayerID='country_boundaries'
            filter={[
              'all',
              ['==', ['get', 'disputed'], 'false'],
              [
                'any',
                ['==', 'all', ['get', 'worldview']],
                ['in', 'US', ['get', 'worldview']],
              ],
            ]}
            belowLayerID='country-labels-md'
            style={{
              fillColor: colors.neutral90,
              fillOpacity: [
                'match',
                ['get', 'iso_3166_1'],
                selectedCountry.code,
                0.1,
                0,
              ],
            }}
          />
          <LineLayer
            id='lineLayer'
            sourceID='countrySource'
            sourceLayerID='country_boundaries'
            belowLayerID='country-labels-md'
            filter={[
              'all',
              [
                'any',
                ['==', 'all', ['get', 'worldview']],
                ['in', 'US', ['get', 'worldview']],
              ],
            ]}
            style={{
              lineColor: colors.neutral90,
              lineWidth: [
                'case',
                [
                  'match',
                  ['get', 'iso_3166_1'],
                  selectedCountry.code,
                  true,
                  false,
                ],
                2,
                ['match', ['get', 'iso_3166_1'], visitedCountries, true, false],
                1.5,
                0,
              ],
            }}
          />
          {/* TODO Zoom into country on click */}
        </VectorSource>
      </MapView>
      <StyledBottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        enableDynamicSizing
      >
        <Grid>
          <Item style={styles.countryName}>
            {/* <CountryFlag
              isoCode={selectedCountry.code}
              size={30}
              style={styles.countryFlag}
            /> */}
            <Text
              h1={selectedCountry.name.length <= 12}
              h2={
                selectedCountry.name.length > 12 &&
                selectedCountry.name.length <= 24
              }
              h3={
                selectedCountry.name.length > 24 &&
                selectedCountry.name.length <= 30
              }
              h4={selectedCountry.name.length > 30}
              style={styles.countryNameText}
            >
              {selectedCountry.name}
            </Text>
          </Item>
          <Item cols={6}>
            {/* TODO Update onPress */}
            <Button
              title='Explore'
              variant='tertiary'
              fullWidth
              onPress={countryVisitedHandler}
            />
          </Item>
          <Item cols={6}>
            <Button
              title='Visited'
              variant='secondary'
              fullWidth
              onPress={countryVisitedHandler}
            />
          </Item>
        </Grid>
      </StyledBottomSheetModal>
    </>
  )
}

export default ScratchMap

const useStyles = makeStyles((theme) => ({
  map: {
    flex: 1,
  },
  countryName: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  countryFlag: {
    marginRight: theme.spacing.md,
  },
  countryNameText: {
    color: theme.colors.neutral20,
    marginBottom: 0,
    textAlign: 'center',
  },
}))
