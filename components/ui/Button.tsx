import type { FC } from 'react'
import { makeStyles, useTheme, Button as RneButton } from '@rneui/themed'
import type { IconProps } from '@rneui/base'
import type { ButtonProps as RneCustomButtonProps } from '@rneui/themed'

enum ThemeColor {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  neutral = 'neutral30',
}

export interface ButtonProps extends RneCustomButtonProps {
  color?: 'primary' | 'secondary' | 'success' | 'neutral'
  variant?: 'solid' | 'outline'
  iconProps?: IconProps
  fullWidth?: boolean
}

const Button: FC<ButtonProps> = ({
  color = 'primary',
  variant = 'solid',
  size,
  iconProps,
  fullWidth,
  ...rest
}) => {
  const themeColor = ThemeColor[color]

  const styles = useStyles({ themeColor, size, fullWidth })
  const { theme } = useTheme()

  const textColor = variant === 'solid' ? theme.colors.textOnBackground[color] : theme.colors.text

  return (
    <RneButton
      size={size}
      color={themeColor}
      type={variant}
      buttonStyle={[styles.root, variant === 'outline' && styles.outlineStyles]}
      titleStyle={{ color: textColor }}
      icon={iconProps && { iconStyle: { color: textColor }, ...iconProps }}
      {...rest}
    />
  )
}

export default Button

interface ButtonStyleProps {
  themeColor: ThemeColor
  size: ButtonProps['size']
  fullWidth?: boolean
}

const useStyles = makeStyles((theme, { themeColor, size, fullWidth }: ButtonStyleProps) => ({
  root: {
    paddingHorizontal: theme.spacing[size || 'md'],
    paddingVertical: theme.spacing[size || 'md'],
    flexGrow: fullWidth ? 1 : undefined,
  },
  outlineStyles: {
    borderWidth: 2,
    borderColor: theme.colors[themeColor],
  },
}))
