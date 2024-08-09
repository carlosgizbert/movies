import { Button } from '../button'
import * as S from './styles'

export default function Navbar() {
  return (
    <S.Wrapper>
      <div>Logo</div>
      <div>Input</div>
      <Button size='small'>Login</Button>
    </S.Wrapper>
  )
}
