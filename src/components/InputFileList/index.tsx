import React from "react";
import { useWatch, useFormContext, Controller } from "react-hook-form";
import { CardProps } from "../../store";
import * as S from "./styles";

const InputFileList = ({ id }: Pick<CardProps, "id">) => {
  const { control } = useFormContext();

  // Watch the file input field for changes
  const files = useWatch({
    control,
    name: id,
    defaultValue: []
  }) as File[];

  return (
    <Controller
      name={id}
      control={control}
      render={() => (
        <S.FileList>
          <div style={{ marginTop: "0.5rem", fontWeight: "bold"}}>파일 목록</div>
          {files && Array.from(files).map((file) => (
            <S.FileItem key={`${file.name}-${file.lastModified}`}>
              ◦ {file.name}
            </S.FileItem>
          ))}
        </S.FileList>
      )}
    />
  );
};

export default InputFileList;
