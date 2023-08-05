import { useCallback, useMemo, useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import Mapbox, {
  FillLayer,
  MapView,
  VectorSource,
  LineLayer,
} from '@rnmapbox/maps'
import { OnPressEvent } from '@rnmapbox/maps/lib/typescript/types/OnPressEvent'

import StyledBottomSheetModal from './ui/StyledBottomSheetModal'
import { H1 } from './ui/Typography'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

Mapbox.setAccessToken(
  'pk.eyJ1IjoiamFrZW1veDk5IiwiYSI6ImNqbmxtYjlvcjFtZmozcHE5aW9zN3pjeXcifQ.UCUt8f58HwBvpHcTz8JqkA'
)

const ScratchMap = () => {
  const [visitedCountries, setVisitedCountries] = useState<string[]>([''])

  const bottomSheetSnapPoints = useMemo(() => ['50%'], [])
  const bottomSheetModalRef = useRef<StyledBottomSheetModal>(null)

  const handlePresentModal = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  const handleOnCountryPress = (event: OnPressEvent) => {
    handlePresentModal()
    // bottomSheetModalRef.current?.snapToIndex(0)
    const countryCode: string = event.features[0].properties?.iso_3166_1 || ''
    setVisitedCountries((prevVisitedCountries: string[]) => {
      if (prevVisitedCountries.includes(countryCode)) {
        return prevVisitedCountries.filter((country) => country !== countryCode)
      } else {
        return [...prevVisitedCountries, countryCode]
      }
    })
  }

  return (
    <>
      <MapView
        style={styles.map}
        styleURL='mapbox://styles/jakemox99/cli76zhe402re01pg4ur61fx4'
        rotateEnabled={false}
        // scaleBarEnabled={false} Breaks the app on Android
        zoomEnabled
      >
        <VectorSource
          id='countrySource'
          url='mapbox://mapbox.country-boundaries-v1'
          onPress={handleOnCountryPress}
        >
          <FillLayer
            id='fillLayer'
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
                '#ebbe84',
                2,
                '#fdecb3',
                3,
                '#669db3',
                4,
                '#b5d5d7',
                5,
                '#cdafd5',
                6,
                '#fbd1d8',
                7,
                '#ebbe84',
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
          <LineLayer
            id='lineLayer'
            sourceID='countrySource'
            sourceLayerID='country_boundaries'
            belowLayerID='country-labels-md'
            filter={[
              'all',
              ['match', ['get', 'iso_3166_1'], visitedCountries, true, false],
              [
                'any',
                ['==', 'all', ['get', 'worldview']],
                ['in', 'US', ['get', 'worldview']],
              ],
            ]}
            style={{
              lineColor: '#332014',
              lineWidth: 1,
              lineOpacity: [
                'match',
                ['get', 'iso_3166_1'],
                visitedCountries,
                1.5,
                0,
              ],
            }}
          />
        </VectorSource>
      </MapView>
      <StyledBottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={bottomSheetSnapPoints}
      >
        <H1>Paris</H1>
      </StyledBottomSheetModal>
    </>
  )
}

export default ScratchMap

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
})
