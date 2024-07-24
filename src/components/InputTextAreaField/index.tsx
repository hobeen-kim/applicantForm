import React from "react";
import { useSelector } from "react-redux";
import { Controller, useFormContext } from "react-hook-form";

import { CardProps, StateProps } from "../../store";
import * as S from "./styles";

const InputTextField = ({ id }: Pick<CardProps, "id">) => {
  const { control } = useFormContext();

  const currentCard = useSelector((state: StateProps) => state.cards.find((card) => card.id === id) as CardProps);

  return (
    <Controller
      name={id}
      control={control}
      render={({ field: { onChange } }) => (
        <S.TextAreaField
          multiline
          minRows={3} // Adjust this value as needed
          onChange={onChange}
          id="standard-basic"
          variant="standard"
          placeholder={currentCard.placeholder}
          $inputType={currentCard.inputType}
        />
      )}
    />
  );
};

export default InputTextField;
