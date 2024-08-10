import CardMovieBig from '@/ui/components/cardMovieBig'
import CardMovieSmall from '@/ui/components/cardMovieSmall'

import * as S from './styles'

const cardMocks = [{
  id: 10101,
  note: 10,
  title: 'O Exorcismo',
  imageUrl: 'https://i.imgur.com/arwlrhC.png'
},
{
  id: 123123,
  note: 10,
  title: 'O Exorcismo',
  imageUrl: 'https://images.squarespace-cdn.com/content/v1/5acd17597c93273e08da4786/1547847934765-ZOU5KGSHYT6UVL6O5E5J/Shrek+Poster.png'
},
{
  id: 101212312301,
  note: 10,
  title: 'O Exorcismo',
  imageUrl: 'https://i.imgur.com/arwlrhC.png'
},
]

export function Hero() {
  return (
    <S.Wrapper>
      <CardMovieBig data={{
          note: 10,
          title: 'Deadpool & Wolverine',
          imageUrl: 'https://m.media-amazon.com/images/M/MV5BNzRiMjg0MzUtNTQ1Mi00Y2Q5LWEwM2MtMzUwZDU5NmVjN2NkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
          description: "Deadpool recebe uma oferta da Autoridade de Variância Temporal para se juntar ao Universo Cinematográfico Marvel, mas em vez disso recruta uma variante do Wolverine para salvar seu universo da extinção.",
          generous: ["Comedy", "Action", "Adventure", "Superhero"],
          minutes: 160,
          views: 120000,
          year: 2024
        }}
      />
      <S.SmallCards>
        {
          cardMocks.map((card) => <CardMovieSmall key={card.id} data={card}/>)
        }
      </S.SmallCards>
    </S.Wrapper>
  )
}
