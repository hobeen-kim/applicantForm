import React from "react";
import * as S from "./styles";

const PartnerLink = ({ link, image }: { link: string, image: string }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <S.Container>
      <S.PartnerImage image={image} onClick={handleClick} />
    </S.Container>
  );
};

export default PartnerLink;
