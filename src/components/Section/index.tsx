import React from "react";
import * as S from "./styles";
import { CardProps, SectionProps } from "../../store";
import PreviewCard from "../PreviewCard";


const Section = ({ section }: { section: SectionProps }) => (

    <S.Container>
      <S.Section >
        {section.isTitle ? <S.TitleHighlight image={section.sectionTitle}/> : null}
        {!section.isTitle ? <S.SectionTitle>{section.sectionTitle}</S.SectionTitle> : null}
      {section.cards.map((card) => (
        <PreviewCard key={card.id} id={card.id} />
      ))}
      </S.Section>
    </S.Container>
  );

export default Section;
