import type { FC } from 'react'
import { makeStyles } from '@rneui/themed'
import { Button as RneButton } from '@rneui/themed'
import type { ButtonProps as RneCustomButtonProps } from '@rneui/themed'

export interface ButtonProps extends RneCustomButtonProps {
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size,
  fullWidth,
  ...rest
}) => {
  const styles = useStyles({ size, fullWidth })

  // const outlinedButtonProps = {
  //   textColor:
  //     variant === 'tertiary' ? theme.colors.onSurface : theme.colors[variant],
  //   style: [
  //     styles.outlinedButton,
  //     { borderColor: theme.colors[variant], flex: fullWidth ? 1 : undefined },
  //     style,
  //   ],
  // }

  return (
    <RneButton
      size={size}
      color={variant}
      buttonStyle={styles.root}
      titleStyle={styles.titleStyle}
      {...rest}
    />
  )
}

export default Button

const useStyles = makeStyles((theme, { size, fullWidth }: ButtonProps) => ({
  root: {
    paddingHorizontal: theme.spacing[size || 'md'],
    paddingVertical: theme.spacing[size || 'md'],
    flexGrow: fullWidth ? 1 : undefined,
  },
  titleStyle: {
    color: theme.colors.white,
  },
}))
