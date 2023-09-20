import { ForwardedRef, forwardRef, useCallback, useMemo } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import {
  BottomSheetModal,
  BottomSheetModalProps,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet'

import { useAppTheme } from '../../styles/theme'
import Container from './Container'

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
        {...rest}
      >
        <Container
          style={{ paddingBottom: insets.bottom + theme.spacing(8) }}
          onLayout={handleContentLayout}
        >
          {children}
        </Container>
      </BottomSheetModal>
    )
  }
)

export default StyledBottomSheetModal
