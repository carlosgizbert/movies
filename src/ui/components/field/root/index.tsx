import { ChangeEventHandler, ComponentProps, ReactNode } from 'react'
import { Wrapper } from '../wrapper'
import { Label } from '../label'
import { Input } from '../input'

import * as S from './styles'

interface RootProps {
  endElement?: ReactNode
  inputProps?: ComponentProps<typeof Input>
  isRequired?: boolean
  label: string
  labelProps?: ComponentProps<typeof Label>
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  startElement?: ReactNode
  value?: string | number | readonly string[]
}

export function Root({
  label,
  inputProps,
  labelProps,
  placeholder,
  isRequired,
  startElement,
  endElement,
  onChange,
  value,
  ...props
}: Readonly<RootProps>) {
  return (
    <Wrapper {...props}>
      <Label {...labelProps}>
        {label} {isRequired && <S.Asterisk>*</S.Asterisk>}
      </Label>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        startElement={startElement}
        endElement={endElement}
        {...inputProps}
      />
    </Wrapper>
  )
}
