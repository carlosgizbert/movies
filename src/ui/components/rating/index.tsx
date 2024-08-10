import { StarFilled } from '../icons'
import * as S from './styles'

interface RatingProps {
  note: number
}

export function Rating({ note }: Readonly<RatingProps>) {
  return (
    <S.Rating>
      <StarFilled />
      {note}
    </S.Rating>
  )
}
