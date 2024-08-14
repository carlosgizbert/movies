import { Button } from '@/ui/components';
import { Play, StarDefault, StarFilled } from '@/ui/components/icons';
import * as S from './styles';

interface DataProps {
  note: number;
  title: string;
  imageUrl: string;
}

interface CardMovieSmallProps {
  data: DataProps;
}

export function CardMovieSmall({ data }: Readonly<CardMovieSmallProps>) {
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
          <S.Title>{title}</S.Title>
          <Button variant='secondary' size='small'>
            Assistir ao trailer
            <Play />
          </Button>
        </S.Footer>
      </S.Content>
    </S.Card>
  );
}
