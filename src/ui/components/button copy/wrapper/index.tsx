import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export function Wrapper(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <S.Wrapper {...props}>index</S.Wrapper>
  )
}
