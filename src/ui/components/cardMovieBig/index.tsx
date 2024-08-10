import { Button } from '@/ui/components';
import { Fire, Play, StarDefault, StarFilled } from '@/ui/components/icons';
import * as S from './styles';

interface DataProps {
  note: number;
  title: string;
  imageUrl: string;
  description: string;
  views: number
  minutes: number
  generous: string[]
  year: number
}

interface CardProps {
  data: DataProps;
}

export default function CardMovieBig({ data }: Readonly<CardProps>) {
  const { note, title, imageUrl } = data;

  return (
    <S.Card>
      <S.BackgroundImage imageUrl={imageUrl} />
      <S.Content>
        <S.Header>
          <S.Rating>
            <S.RatingStar>
              <StarFilled />
              {note}
            </S.RatingStar>
            <S.ButtonFavorite>
              <StarDefault stroke='#fff' />
            </S.ButtonFavorite>
          </S.Rating>
        </S.Header>
        <S.Footer>
          <S.Emphasis>
            <Fire />
            Em destaque
          </S.Emphasis>
          <S.Title>{title}</S.Title>
          <Button variant='secondary'>
            <S.ButtonLabel>
              Assistir ao trailer
            </S.ButtonLabel>
            <Play />
          </Button>
        </S.Footer>
      </S.Content>
    </S.Card>
  );
}
