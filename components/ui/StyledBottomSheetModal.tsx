import { Text } from 'react-native'
import { PropsWithChildren, forwardRef } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import type { EdgeInsets } from 'react-native-safe-area-context'

import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'
import type { BottomSheetModalProps } from '@gorhom/bottom-sheet'

import Container from './Container'
import { makeStyles } from '@rneui/themed'

const StyledBottomSheetModal = forwardRef<
  BottomSheetModal,
  PropsWithChildren<BottomSheetModalProps>
>(({ children, ...rest }, ref) => {
  const insets = useSafeAreaInsets()
  const styles = useStyles(insets)

  return (
    <BottomSheetModal
      ref={ref}
      enablePanDownToClose
      backgroundStyle={styles.background}
      handleStyle={styles.handle}
      handleIndicatorStyle={styles.handleIndicator}
      {...rest}
    >
      <BottomSheetView style={styles.bottomSheetView}>
        <Container style={styles.container}>{children}</Container>
      </BottomSheetView>
    </BottomSheetModal>
  )
})

export default StyledBottomSheetModal

const useStyles = makeStyles((theme, insets: EdgeInsets) => ({
  background: {
    backgroundColor: theme.colors.neutral90,
    borderRadius: 0,
  },
  handle: {
    borderRadius: 0,
  },
  handleIndicator: {
    backgroundColor: theme.colors.neutral20,
    borderRadius: 0,
    width: '25%',
    height: 2,
  },
  bottomSheetView: {
    display: 'flex',
  },
  container: {
    paddingBottom:
      insets.bottom > 0 ? insets.bottom + theme.spacing.md : theme.spacing.xl,
  },
}))
