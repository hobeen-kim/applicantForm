import React from "react";
import * as S from "./styles";

const CompleteBox = ({ complete }: { complete: string }) => (
    <S.Container>
      <S.Complete dangerouslySetInnerHTML={{ __html: complete }} />
    </S.Container>
  );

export default CompleteBox;
