import { useCallback, useRef, useState } from 'react'
import type { FC } from 'react'
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

import type { BottomSheetModal } from '@gorhom/bottom-sheet'
import { useTheme } from '@rneui/themed'
import ScratchMapBottomSheet from './ScratchMapBottomSheet'
import { StyleSheet } from 'react-native'

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_KEY || null)

const DEFAULT_SELECTED_COUNTRY = { name: '', code: '' }

const ScratchMap: FC = () => {
  const {
    theme: { colors },
  } = useTheme()

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
            style={{ backgroundColor: colors.lightBlue }}
          />
          <FillLayer
            id='fillLayer'
            sourceID='countrySource'
            sourceLayerID='country_boundaries'
            layerIndex={1}
            style={{ fillColor: colors.neutral20 }}
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
                colors.lightOrange,
                2,
                colors.yellow,
                3,
                colors.blue,
                4,
                colors.lightGreen,
                5,
                colors.violet,
                6,
                colors.pink,
                7,
                colors.lightOrange,
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
              fillColor: colors.text,
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
              lineColor: colors.text,
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
      <ScratchMapBottomSheet
        ref={bottomSheetModalRef}
        heading={selectedCountry.name}
        // TODO Update onPress
        buttons={[
          {
            title: 'Explore',
            variant: 'secondary',
            fullWidth: true,
            onPress: countryVisitedHandler,
          },
          {
            title: 'Visited',
            variant: 'primary',
            fullWidth: true,
            onPress: countryVisitedHandler,
          },
        ]}
      />
    </>
  )
}

export default ScratchMap

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
})
