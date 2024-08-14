import { useState } from "react";
import { Layout } from "@/ui/components/template/layout";
import { Hero } from "@/ui/components/hero";
import { CardMovieSmall } from "@/ui/components/cardMovieSmall";
import { SectionTitle } from "@/ui/components/sectionTitle";
import { Button } from "@/ui/components";
import { Clapperboard } from "@/ui/components/icons";
import { ModalGlobal } from "./modal";
import { lastReleasesMock, recommendedMock } from "@/tasteless/mocks";

import * as S from "./styles";

export default function Home() {
  const [showGlobalModal, setShowGlobalModal] = useState<boolean>(true)

  return (
    <Layout>
      <S.Container>
        <Hero />
        <S.Section>
          <SectionTitle>Últimos lançamentos</SectionTitle>
          <S.SectionBody>
            {lastReleasesMock.map((card) => (
              <CardMovieSmall key={card.id} data={card} />
            ))}
          </S.SectionBody>
        </S.Section>
        <S.Section>
          <SectionTitle>Filmes assistidos</SectionTitle>
          <S.SectionBody className="no-content">
            <Clapperboard />
            <span className="no-content-title">Ops, nenhum filme avaliado ainda.</span>
            <span className="no-content-subtitle">Que tal adicionar um ?</span>
              <Button size="small">Fazer login</Button>
          </S.SectionBody>
        </S.Section>
        <S.Section>
          <SectionTitle>Recomendados</SectionTitle>
          <S.SectionBody>
            {recommendedMock.map((card) => (
              <CardMovieSmall key={card.id} data={card} />
            ))}
          </S.SectionBody>
        </S.Section>
        {showGlobalModal && <ModalGlobal onClose={() => setShowGlobalModal(false)} />}
      </S.Container>
    </Layout>
  );
}
