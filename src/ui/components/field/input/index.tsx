import {
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode
} from 'react'
import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startElement?: ReactNode
  endElement?: ReactNode
  wrapperProps?: HTMLAttributes<HTMLDivElement>
}

export function Input({
  startElement,
  endElement,
  wrapperProps,
  ...props
}: Readonly<InputProps>) {
  return (
    <S.Wrapper {...wrapperProps}>
      <S.StartAdornment>
        {startElement}
        <S.Input {...props} />
      </S.StartAdornment>
      {endElement}
    </S.Wrapper>
  )
}
