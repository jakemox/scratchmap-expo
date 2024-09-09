import { useCallback, useState } from 'react'
import { StyleSheet } from 'react-native'
import type { FC } from 'react'

import { useTheme } from '@rneui/themed'
import Mapbox, {
  BackgroundLayer,
  FillLayer,
  MapView,
  VectorSource,
  LineLayer,
  Camera,
} from '@rnmapbox/maps'
import type { OnPressEvent } from '@rnmapbox/maps/lib/typescript/src/types/OnPressEvent'
// import CountryFlag from 'react-native-country-flag'

import { useBottomSheetModal } from '../hooks/useBottomSheetModal'
import StyledBottomSheetModal from './ui/StyledBottomSheetModal'
import ScratchMapBottomSheetContent from './ScratchMapBottomSheetContent'

interface Country {
  name: string
  code: string
}

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_KEY || null)

const DEFAULT_SELECTED_COUNTRY: Country = {
  name: '',
  code: '',
}

const ScratchMap: FC = () => {
  const {
    theme: { colors },
  } = useTheme()
  const { bottomSheetModalRef, presentModal, closeModal } = useBottomSheetModal()

  const [selectedCountry, setSelectedCountry] = useState<Country>(DEFAULT_SELECTED_COUNTRY)
  const [visitedCountries, setVisitedCountries] = useState<string[]>([''])

  const closeModalHandler = useCallback(() => {
    closeModal()
    setSelectedCountry(DEFAULT_SELECTED_COUNTRY)
  }, [])

  const countryPressHandler = (event: OnPressEvent) => {
    const { name_en, iso_3166_1 } = event.features[0].properties || {}
    setSelectedCountry({ name: name_en, code: iso_3166_1 })
    presentModal()
    console.log(event.features[0])
  }

  const countryVisitedHandler = () => {
    setVisitedCountries((prevVisitedCountries: string[]) => {
      if (prevVisitedCountries.includes(selectedCountry.code)) {
        return prevVisitedCountries.filter((country) => country !== selectedCountry.code)
      } else {
        return [...prevVisitedCountries, selectedCountry.code]
      }
    })
  }

  return (
    <>
      <StyledBottomSheetModal ref={bottomSheetModalRef} index={0} enableDynamicSizing>
        <ScratchMapBottomSheetContent
          heading={selectedCountry.name}
          // TODO Update onPress
          buttons={[
            {
              title: 'Visited',
              // iconProps: {
              //   name: 'where-to-vote',
              // },
              color: visitedCountries.includes(selectedCountry.code) ? 'success' : 'neutral',
              fullWidth: true,
              onPress: countryVisitedHandler,
            },
            {
              title: 'Explore',
              // iconProps: {
              //   name: 'public',
              // },
              color: 'primary',
              fullWidth: true,
              onPress: countryVisitedHandler,
            },
          ]}
        />
      </StyledBottomSheetModal>
      <MapView
        style={styles.map}
        styleURL={process.env.EXPO_PUBLIC_MAPBOX_STYLE_URL}
        rotateEnabled={false}
        scaleBarEnabled={false}
        zoomEnabled
        onPress={closeModalHandler}
      >
        <Camera bounds={{ ne: [11.64, -17.93], sw: [24.08, -4.44] }} />
        <VectorSource
          id="countrySource"
          url={process.env.EXPO_PUBLIC_MAPBOX_DATA_SOURCE}
          onPress={countryPressHandler}
        >
          <BackgroundLayer
            id="backgroundLayer"
            layerIndex={0}
            style={{ backgroundColor: colors.decorative.lightBlue }}
          />
          <FillLayer
            id="fillLayer"
            sourceID="countrySource"
            sourceLayerID="country_boundaries"
            layerIndex={1}
            style={{ fillColor: colors.neutral20 }}
          />
          <FillLayer
            id="visitedFillLayer"
            sourceID="countrySource"
            sourceLayerID="country_boundaries"
            filter={[
              'all',
              ['==', ['get', 'disputed'], 'false'],
              ['any', ['==', 'all', ['get', 'worldview']], ['in', 'US', ['get', 'worldview']]],
            ]}
            belowLayerID="country-labels-md"
            style={{
              fillColor: [
                'step',
                ['get', 'color_group'],
                colors.decorative.yellow,
                2,
                colors.decorative.mint,
                3,
                colors.decorative.blush,
                4,
                colors.decorative.lightLilac,
                5,
                colors.decorative.mint,
                6,
                colors.decorative.blush,
                7,
                colors.decorative.yellow,
              ],
              fillOpacity: ['match', ['get', 'iso_3166_1'], visitedCountries, 1, 0],
            }}
          />
          <FillLayer
            id="highlightFillLayer"
            sourceID="countrySource"
            sourceLayerID="country_boundaries"
            filter={[
              'all',
              ['==', ['get', 'disputed'], 'false'],
              ['any', ['==', 'all', ['get', 'worldview']], ['in', 'US', ['get', 'worldview']]],
            ]}
            belowLayerID="country-labels-md"
            style={{
              fillColor: colors.text,
              fillOpacity: ['match', ['get', 'iso_3166_1'], selectedCountry.code, 0.1, 0],
            }}
          />
          <LineLayer
            id="lineLayer"
            sourceID="countrySource"
            sourceLayerID="country_boundaries"
            belowLayerID="country-labels-md"
            filter={[
              'all',
              ['any', ['==', 'all', ['get', 'worldview']], ['in', 'US', ['get', 'worldview']]],
            ]}
            style={{
              lineColor: colors.text,
              lineWidth: [
                'case',
                ['match', ['get', 'iso_3166_1'], selectedCountry.code, true, false],
                2.5,
                ['match', ['get', 'iso_3166_1'], visitedCountries, true, false],
                1.5,
                0,
              ],
            }}
          />
          {/* TODO Zoom into country on click */}
        </VectorSource>
      </MapView>
    </>
  )
}

export default ScratchMap

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
})
