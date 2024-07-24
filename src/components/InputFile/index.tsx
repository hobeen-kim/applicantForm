import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Controller, useFormContext } from "react-hook-form";

import { CardProps, StateProps } from "../../store";
import * as S from "./styles";

const InputFile = ({ id }: Pick<CardProps, "id">) => {
  const { control } = useFormContext();

  const currentCard = useSelector(
    (state: StateProps) => state.cards.find((card) => card.id === id) as CardProps
  );

  const handleFileChange = (files: FileList | null) => {
    if (files) {
      const names = Array.from(files).map(file => file.name);
      console.log(names)
    }
  };

  return (
      <Controller
        name={id}
        control={control}
        render={({ field: { onChange } }) => (
          <S.FileInput
            type="file"
            multiple
            onChange={(e) => {
              onChange(e.target.files); // Pass files to react-hook-form
              handleFileChange(e.target.files); // Update local state for displaying file names
            }}
            id="file-upload"
          />
        )}
      />
  )
};

export default InputFile;
