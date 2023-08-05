import { ForwardedRef, forwardRef, useCallback, useMemo } from 'react'
import { StyleSheet, View } from 'react-native'

import { BottomSheetModal, BottomSheetModalProps } from '@gorhom/bottom-sheet'

declare type StyledBottomSheetModal = BottomSheetModal

const StyledBottomSheetModal = forwardRef<
  BottomSheetModal,
  BottomSheetModalProps
>(
  (
    { children, ...rest }: BottomSheetModalProps,
    ref: ForwardedRef<BottomSheetModal>
  ) => {
    const handleSheetChanges = useCallback((index: number) => {
      console.log('handleSheetChanges', index)
    }, [])

    return (
      <BottomSheetModal
        onChange={handleSheetChanges}
        enablePanDownToClose
        ref={ref}
        {...rest}
      >
        {children}
      </BottomSheetModal>
    )
  }
)

export default StyledBottomSheetModal

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
})
