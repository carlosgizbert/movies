import Layout from "@/ui/components/template/layout";
import { Hero } from "@/ui/components/hero";
import CardMovieSmall from "@/ui/components/cardMovieSmall";

import * as S from './styles'
import { Rectangule } from "@/ui/components/icons";

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
  {
    id: 10213123321101,
    note: 10,
    title: 'O Exorcismo',
    imageUrl: 'https://i.imgur.com/arwlrhC.png'
  },
]

export default function Home() {
  return (
    <Layout>
      <S.Container>
        <Hero />
        <S.SectionReleases>
          <S.SectionTitle>
            <Rectangule />
            Últimos lançamentos
          </S.SectionTitle>
          <S.SectionBody>
            {
              cardMocks.map((card) => <CardMovieSmall key={card.id} data={card}/>)
            }
          </S.SectionBody>
        </S.SectionReleases>
      </S.Container>
    </Layout>
  )
}
