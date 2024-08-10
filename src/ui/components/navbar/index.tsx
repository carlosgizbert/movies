import { Button } from '@/ui/components/button'
import { Logo } from '@/ui/components/logo'
import { Field } from '../field'
import { Search } from '../icons'

import * as S from './styles'

export default function Navbar() {
  return (
    <S.Wrapper>
      <Logo />
      <Field
        placeholder='Pesquisar'
        startElement={
          <S.SearchIcon>
            <Search />
          </S.SearchIcon>
        }
      />
      <Button size='small'>Login</Button>
    </S.Wrapper>
  )
}
