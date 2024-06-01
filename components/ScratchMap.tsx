import { useCallback, useRef, useState } from 'react'
import { StyleSheet } from 'react-native'

import Mapbox, {
  FillLayer,
  MapView,
  VectorSource,
  LineLayer,
  Camera,
} from '@rnmapbox/maps'
import { OnPressEvent } from '@rnmapbox/maps/lib/typescript/types/OnPressEvent'
import CountryFlag from 'react-native-country-flag'

import StyledBottomSheetModal from './ui/StyledBottomSheetModal'
import Typography from './ui/Typography'
import Button from './ui/Button'
import Grid from './ui/grid/Grid'
import Item from './ui/grid/Item'

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_KEY || null)

const DEFAULT_SELECTED_COUNTRY = { name: '', code: '' }

const ScratchMap = () => {
  const [selectedCountry, setSelectedCountry] = useState(
    DEFAULT_SELECTED_COUNTRY
  )
  const [visitedCountries, setVisitedCountries] = useState<string[]>([''])

  const bottomSheetModalRef = useRef<StyledBottomSheetModal>(null)

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
            // TODO Use theme colors
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
            // TODO Use theme colors
            style={{
              fillColor: '#332014',
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
              lineColor: '#332014',
              lineWidth: [
                'case',
                [
                  'match',
                  ['get', 'iso_3166_1'],
                  selectedCountry.code,
                  true,
                  false,
                ],
                3,
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
        // TODO Move index to StyledBottomSheetModal as default?
        index={0}
      >
        <Grid>
          <Item style={styles.countryName}>
            <CountryFlag
              isoCode={selectedCountry.code}
              size={30}
              style={styles.countryFlag}
            />
            <Typography variant='headlineMedium' style={styles.countryNameText}>
              {selectedCountry.name}
            </Typography>
          </Item>
          <Item cols={6}>
            <Button mode='contained' variant='tertiary' fullWidth>
              Explore
            </Button>
          </Item>
          <Item cols={6}>
            <Button
              mode='contained'
              variant='secondary'
              fullWidth
              onPress={countryVisitedHandler}
            >
              Visited
            </Button>
          </Item>
        </Grid>
      </StyledBottomSheetModal>
    </>
  )
}

export default ScratchMap

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  countryName: {
    flexDirection: 'row',
    alignItems: 'center',
    // TODO Theme.spacer
    marginBottom: 24,
  },
  countryFlag: {
    marginRight: 12,
    borderRadius: 4,
  },
  countryNameText: {
    marginBottom: 0,
  },
})
