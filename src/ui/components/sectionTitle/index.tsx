import { ReactNode } from 'react'
import { Rectangule } from '../icons'

import * as S from './styles'

interface SectionTitleProps {
  children: ReactNode
}

export function SectionTitle({ children }: Readonly<SectionTitleProps>) {
  return (
    <S.SectionTitle>
      <Rectangule />
      { children }
    </S.SectionTitle>
  )
}
