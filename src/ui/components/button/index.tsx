import { ComponentProps } from 'react'
import { getBackgroundOpacityVariant, getColorVariant, getHeightVariant } from './functions'
import { Size, Variant } from './interfaces'
import { Wrapper as StyledWrapper } from './styles'

interface WrapperProps extends Omit<ComponentProps<typeof StyledWrapper>, 'colors'| 'backgroundOpacity'> {
  size?: Size
  variant?: Variant
}

export function Button({
  size = 'default',
  variant = 'default',
  children,
  ...props
}: Readonly<WrapperProps>) {

  return (
    <StyledWrapper
      {...props}
      colors={getColorVariant(variant)}
      height={getHeightVariant(size)}
      backgroundOpacity={getBackgroundOpacityVariant(variant)}
    >
      {children}
    </StyledWrapper>
  )
}
