import { CardMovieBig } from '@/ui/components/cardMovieBig'
import { CardMovieSmall } from '@/ui/components/cardMovieSmall'
import { SectionTitle } from '../sectionTitle'
import { heroMock } from '@/tasteless/mocks'
import * as S from './styles'

export function Hero() {
  return (
    <S.Wrapper>
      <CardMovieBig data={{
          note: 8.2,
          title: 'Deadpool & Wolverine',
          imageUrl: 'https://legadodamarvel.com.br/wp-content/uploads/2024/05/deadpool-wolverine-novo-e-melhor-poster-legadodamarvel.webp',
          description: "Deadpool recebe uma oferta da Autoridade de Variância Temporal para se juntar ao Universo Cinematográfico Marvel, mas em vez disso recruta uma variante do Wolverine para salvar seu universo da extinção.",
          generous: ["Comedy", "Action", "Adventure", "Superhero"],
          minutes: 160,
          views: 120000,
          year: 2024
        }}
      />
      <S.SmallCards>
        <SectionTitle>
          Destaques também
        </SectionTitle>
        {
          heroMock.map((card) => <CardMovieSmall key={card.id} data={card}/>)
        }
      </S.SmallCards>
    </S.Wrapper>
  )
}
