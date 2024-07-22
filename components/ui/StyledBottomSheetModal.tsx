import { PropsWithChildren, forwardRef } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'
import type { BottomSheetModalProps } from '@gorhom/bottom-sheet'

import { useAppTheme } from '../../styles/theme'
import Container from './Container'

const StyledBottomSheetModal = forwardRef<
  BottomSheetModal,
  PropsWithChildren<BottomSheetModalProps>
>(({ children, ...rest }, ref) => {
  const theme = useAppTheme()
  const insets = useSafeAreaInsets()

  return (
    <BottomSheetModal ref={ref} enablePanDownToClose {...rest}>
      <BottomSheetView style={{ display: 'flex' }}>
        <Container
          style={{
            paddingBottom:
              insets.bottom > 0
                ? insets.bottom + theme.spacing(4)
                : theme.spacing(10),
          }}
        >
          {children}
        </Container>
      </BottomSheetView>
    </BottomSheetModal>
  )
})

export default StyledBottomSheetModal
