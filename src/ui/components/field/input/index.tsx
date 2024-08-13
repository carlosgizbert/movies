import {
  forwardRef,
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

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { startElement, endElement, wrapperProps, ...props },
  ref
) {
  return (
    <S.Wrapper {...wrapperProps} className='rater-input-wrapper'>
      <S.StartAdornment>
        {startElement}
        <S.Input ref={ref} {...props} />
      </S.StartAdornment>
      {endElement}
    </S.Wrapper>
  )
});
