import { Button } from "@/ui/components";
import { Fire, Play } from "@/ui/components/icons";
import { Rating } from "@/ui/components/rating";

import * as S from "./styles";

interface DataProps {
  note: number;
  title: string;
  imageUrl: string;
  description: string;
  views: number;
  minutes: number;
  generous: string[];
  year: number;
}

interface CardProps {
  data: DataProps;
}

export default function CardMovieBig({ data }: Readonly<CardProps>) {
  const { note, minutes, generous, year, title, imageUrl, description } = data;

  return (
    <S.Card>
      <S.BackgroundImage imageUrl={imageUrl} />
      <S.Content>
        <S.Footer>
          <S.Emphasis>
            <Fire />
            Em destaque
          </S.Emphasis>
          <S.Title>{title}</S.Title>
          <S.Subtitle>
            <Rating note={note} />
            <S.SubtitleDetails>
              <span className="subtitle-detail-text">|</span>
              <span className="subtitle-detail-text">{minutes}</span>
              <span className="subtitle-detail-text">&#8226;</span>
              {generous.map((genre, index) => {
                return (
                  <span key={genre} className="subtitle-detail-text">
                    {genre}{index < generous.length - 1 && ','}
                  </span>
                )
              })}
              <span className="subtitle-detail-text">&#8226;</span>
              <span className="subtitle-detail-text">{year}</span>
            </S.SubtitleDetails>
          </S.Subtitle>
          <S.Description>{description}</S.Description>
          <Button variant="secondary" className="button">
            <S.ButtonLabel>Assistir ao trailer</S.ButtonLabel>
            <Play />
          </Button>
        </S.Footer>
      </S.Content>
    </S.Card>
  );
}
