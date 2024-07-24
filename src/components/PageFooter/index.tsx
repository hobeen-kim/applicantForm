import React from "react";
import * as S from "./styles";
import { Monthler, MonthlerImage } from "./styles";

const PageFooter = ({ partnerName }: { partnerName: string }) => {
  const handleClick = () => {
    window.open('https://www.monthler.kr', '_blank');
  };

  return (
    <S.Container>
      <S.PartnerName>이 프로그램은 {partnerName}에서 진행합니다.</S.PartnerName>
      <S.MonthlerWrapper>
        <S.MonthlerImage src='https://form.monthler.kr/logo.png' alt='한달살러 신청서' />
        <S.Monthler onClick={handleClick}>한달살러 신청서</S.Monthler>
      </S.MonthlerWrapper>
    </S.Container>
  );
};

export default PageFooter;
