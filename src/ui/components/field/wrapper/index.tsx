import { HTMLAttributes } from 'react'
import * as S from './styles'

export function Wrapper({ children, ...props }: Readonly<HTMLAttributes<HTMLDivElement>>) {
  return (
    <S.Wrapper {...props}>
      {children}
    </S.Wrapper>
  )
}
