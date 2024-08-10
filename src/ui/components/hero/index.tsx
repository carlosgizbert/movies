import CardMovieBig from '@/ui/components/cardMovieBig'

import * as S from './styles'

export default function Hero() {
  return (
    <S.Wrapper>
      <CardMovieBig data={{
          note: 10,
          title: 'O Exorcismo',
          imageUrl: 'https://m.media-amazon.com/images/M/MV5BNzRiMjg0MzUtNTQ1Mi00Y2Q5LWEwM2MtMzUwZDU5NmVjN2NkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
          description: "Deadpool recebe uma oferta da Autoridade de Variância Temporal para se juntar ao Universo Cinematográfico Marvel, mas em vez disso recruta uma variante do Wolverine para salvar seu universo da extinção.",
          generous: ["Comedy", "Action", "Adventure", "Superhero"],
          minutes: 160,
          views: 120000,
          year: 2024
        }}
      />
    </S.Wrapper>
  )
}
