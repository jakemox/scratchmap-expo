import { FC } from 'react'
import Grid from './ui/grid/Grid'
import Item from './ui/grid/Item'
import Button from './ui/Button'
import type { ButtonProps } from './ui/Button'
import { Text, makeStyles } from '@rneui/themed'

interface ScratchMapBottomSheetContentProps {
  heading: string
  buttons?: ButtonProps[]
}

const ScratchMapBottomSheetContent: FC<ScratchMapBottomSheetContentProps> = ({
  heading,
  buttons,
}) => {
  const styles = useStyles()

  return (
    <Grid>
      <Item style={styles.countryName}>
        {/* <CountryFlag
            isoCode={selectedCountry.code}
            size={30}
            style={styles.countryFlag}
          /> */}
        <Text
          h1={heading.length <= 12}
          h2={heading.length > 12 && heading.length <= 24}
          h3={heading.length > 24 && heading.length <= 30}
          h4={heading.length > 30}
          style={styles.countryNameText}
        >
          {heading}
        </Text>
      </Item>
      {buttons &&
        buttons.map(({ ...rest }, index) => {
          return (
            <Item key={index} cols={buttons.length === 2 ? 6 : 12}>
              <Button {...rest} />
            </Item>
          )
        })}
    </Grid>
  )
}

export default ScratchMapBottomSheetContent

const useStyles = makeStyles((theme) => ({
  countryName: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  countryFlag: {
    marginRight: theme.spacing.md,
  },
  countryNameText: {
    color: theme.colors.text,
    marginBottom: 0,
    textAlign: 'center',
  },
}))
