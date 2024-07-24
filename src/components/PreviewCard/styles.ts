import styled from "styled-components";
import React from "react";

export const Container = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 16px;
  justify-content: center;
`;

export const Card = styled.div<{ needToCompleteRequired: boolean, needToCompleteLengthMin: boolean }>`
  display: flex;
  flex-direction: column;
  border: ${({ theme, needToCompleteRequired, needToCompleteLengthMin }) =>
    needToCompleteRequired || needToCompleteLengthMin
      ? `1px solid ${theme.colors.RED}`
      : `1px solid ${theme.colors.GREY_HEAVY}`};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  min-height: 131px;
  @media (max-width: 768px) {
      width: 100%;
  }
  width: 640px;
  padding: 24px;
  box-sizing: border-box;
`;

export const TitleHighlight = styled.div<{ image: string }>`
  background-image: url(${({ image }) => image});
  background-size: 100% 100%; /* 이미지 크기 조정 */
  background-repeat: no-repeat; /* 이미지 반복 방지 */
  position: absolute;
  top: -24px;
  left: -24px;
  width: 108%;
  height: 200px;
  z-index: 20;
  border-radius: 8px 8px 0 0; /* 위쪽 두 모서리만 라운드 */

`;

export const HeightSpace = styled.div`
  height: 170px;
  z-index: 20;
  border-radius: 8px 8px 0 0; /* 위쪽 두 모서리만 라운드 */

`;


export const RequiredSection = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 30px;
`;

export const RequiredSpan = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.RED};
`;

export const LengthMinSection = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 30px;
`;

export const LengthMinSpan = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.RED};
`;
