import { ReactNode } from 'react'
import Navbar from '../../navbar'
import * as S from './styled'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <S.Wrapper>
      <Navbar />
      <S.Body>
        {children}
      </S.Body>
    </S.Wrapper>
  )
}
