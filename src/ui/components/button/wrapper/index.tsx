import { ButtonHTMLAttributes } from 'react'
import { getColorVariant } from './functions'
import * as S from './styles'

interface HeightVariantProps {
  small: number
  default: number
}

type Size = 'default' | 'small'

interface WrapperProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size
}

const heightVariant: HeightVariantProps = {
  small: 40,
  default: 48
}

export function Wrapper({
  size = 'default',
  children,
  ...props
}: Readonly<WrapperProps>) {

  return (
    <S.Wrapper
      {...props}
      colors={getColorVariant()}
      height={heightVariant[size]}
    >
      {children}
    </S.Wrapper>
  )
}
