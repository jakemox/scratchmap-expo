import {
  Button as PaperButton,
  ButtonProps as PaperButtonProps,
} from 'react-native-paper'
import { StyleSheet } from 'react-native'
import { useAppTheme } from '../../styles/theme'

type ButtonProps = PaperButtonProps & {
  mode?: 'text' | 'contained' | 'outlined' | 'elevated'
  variant?: 'primary' | 'secondary' | 'tertiary'
  fullWidth?: boolean
}

const Button = ({
  variant = 'primary',
  mode = 'text',
  fullWidth,
  ...attr
}: ButtonProps) => {
  const { compact, style, ...rest } = attr
  const theme = useAppTheme()

  const labelStyle = {
    marginVertical: compact ? theme.spacing(2) : theme.spacing(3.5),
    marginHorizontal: compact ? theme.spacing(3) : theme.spacing(6), //TODO Make it so that theme styles can be used in StyleSheet
  }

  const textButtonProps = {
    textColor: theme.colors[variant],
    style,
  }

  const containedButtonProps = {
    buttonColor: theme.colors[variant],
    textColor:
      variant === 'tertiary' ? theme.colors.onSurface : theme.colors.onPrimary,
    style: [{ flex: fullWidth ? 1 : undefined }, style],
  }

  const outlinedButtonProps = {
    textColor:
      variant === 'tertiary' ? theme.colors.onSurface : theme.colors[variant],
    style: [
      styles.outlinedButton,
      { borderColor: theme.colors[variant], flex: fullWidth ? 1 : undefined },
      style,
    ],
  }

  const buttonProps =
    mode && ['contained', 'elevated'].includes(mode)
      ? containedButtonProps
      : mode === 'outlined'
      ? outlinedButtonProps
      : textButtonProps

  return (
    <PaperButton
      mode={mode}
      compact={compact}
      labelStyle={labelStyle}
      {...buttonProps}
      {...rest}
    />
  )
}

export default Button

const styles = StyleSheet.create({
  outlinedButton: {
    borderWidth: 2,
  },
})
