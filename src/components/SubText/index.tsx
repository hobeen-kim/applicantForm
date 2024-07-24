import React from "react";
import { useSelector } from "react-redux";
import { CardProps, StateProps } from "../../store";
import * as S from "./styles";

const SubText = ({ id }: Pick<CardProps, "id">) => {
  const currentCard = useSelector((state: StateProps) => state.cards.find((card) => card.id === id));

  if (!currentCard || currentCard.subText === "") {
    return null;
  }

  return (
    <S.SubTextField>{currentCard.subText}</S.SubTextField>
  );
};

export default SubText;
