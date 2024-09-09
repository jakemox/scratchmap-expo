import { useCallback, useRef } from 'react'
import type { BottomSheetModal } from '@gorhom/bottom-sheet'

export const useBottomSheetModal = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  const presentModal = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  const closeModal = useCallback(() => {
    bottomSheetModalRef.current?.close()
  }, [])

  return {
    bottomSheetModalRef,
    presentModal,
    closeModal,
  }
}
