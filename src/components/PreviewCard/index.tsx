import React from "react";
import { useSelector } from "react-redux";

import { CardProps, InputTypes, StateProps } from "../../store";
import InputCheckbox from "../InputCheckbox";
import InputRadio from "../InputRadio";
import InputSelect from "../InputSelect";
import InputTextField from "../InputTextField";
import PreviewCardTitle from "../PreviewCardTitle";
import * as S from "./styles";
import SubText from "../SubText";
import InputTextAreaField from "../InputTextAreaField";

const PreviewCard = ({ id }: Pick<CardProps, "id">) => {
  const inputType = useSelector((state: StateProps) => {
    const currentCard = state.cards.find((card) => card.id === id) as CardProps;
    return currentCard.inputType;
  }) as string;

  const requiredCardIds = useSelector((state: StateProps) => state.required as string[]);
  const lengthMinCardIds = useSelector((state: StateProps) => state.lengthMin as string[]);

  const isTitle = inputType === InputTypes.TITLE;
  const needToCompleteRequired = requiredCardIds.includes(id);
  const needToCompleteLengthMin = lengthMinCardIds.includes(id);

  return (
    <S.Container>
      <S.Card needToCompleteRequired={needToCompleteRequired} needToCompleteLengthMin={needToCompleteLengthMin}>
        {isTitle ? <S.TitleHighlight /> : null}
        <PreviewCardTitle id={id} />
        {inputType !== InputTypes.TITLE ? <SubText id={id} /> : null}
        {inputType === InputTypes.TEXT ? <InputTextField id={id} /> : null}
        {inputType === InputTypes.TEXTAREA ? <InputTextAreaField id={id} /> : null}
        {inputType === InputTypes.RADIO ? <InputRadio id={id} /> : null}
        {inputType === InputTypes.CHECKBOX ? <InputCheckbox id={id} /> : null}
        {inputType === InputTypes.SELECT ? <InputSelect id={id} /> : null}
        {needToCompleteRequired ? (
          <S.RequiredSection>
            <S.RequiredSpan>필수 질문입니다.</S.RequiredSpan>
          </S.RequiredSection>
        ) : null}
        {needToCompleteLengthMin ? (
          <S.RequiredSection>
            <S.RequiredSpan>최소 글자 수를 확인해주세요.</S.RequiredSpan>
          </S.RequiredSection>
        ) : null}
      </S.Card>
    </S.Container>
  );
};

export default PreviewCard;
