import { ForwardedRef, forwardRef, useCallback, useMemo } from 'react'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import {
  BottomSheetModal,
  BottomSheetModalProps,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet'

import { styles as containerStyles } from './Container'
import { useAppTheme } from '../../styles/theme'

// Allow type to be exported with component.
type StyledBottomSheetModal = BottomSheetModal

type StyledBottomSheetModalProps = Omit<BottomSheetModalProps, 'snapPoints'> & {
  snapPoints?: BottomSheetModalProps['snapPoints']
  children: React.ReactNode
}

const StyledBottomSheetModal = forwardRef<
  StyledBottomSheetModal,
  StyledBottomSheetModalProps
>(
  (
    { snapPoints, children, ...rest }: StyledBottomSheetModalProps,
    ref: ForwardedRef<StyledBottomSheetModal>
  ) => {
    const theme = useAppTheme()
    const insets = useSafeAreaInsets()

    // TODO Use snapPoints prop
    const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], [])

    const {
      animatedHandleHeight,
      animatedSnapPoints,
      animatedContentHeight,
      handleContentLayout,
    } = useBottomSheetDynamicSnapPoints(initialSnapPoints)

    const handleSheetChanges = useCallback((index: number) => {
      console.log('handleSheetChanges', index)
    }, [])

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={snapPoints || animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        onChange={handleSheetChanges}
        enablePanDownToClose
        style={containerStyles.root}
        {...rest}
      >
        <View
          style={{ paddingBottom: insets.bottom + theme.spacing(8) }}
          onLayout={handleContentLayout}
        >
          {children}
        </View>
      </BottomSheetModal>
    )
  }
)

export default StyledBottomSheetModal

// TODO Use or remove
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
})
