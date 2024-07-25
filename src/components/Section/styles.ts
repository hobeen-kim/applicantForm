import styled from "styled-components";
import React from "react";

export const Container = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 16px;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
  width: 660px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  border: 0px solid ${({ theme }) => theme.colors.GREY_HEAVY};
  border-radius: 12px;
  // background-color: ${({ theme }) => theme.colors.WHITE};
  min-height: 131px;
  @media (max-width: 768px) {
    width: 100%;
  }
  width: 100%;
  box-sizing: border-box;
`;

export const TitleHighlight = styled.div<{ image: string }>`
  background-image: url(${({ image }) => image});
  background-size: 100% auto; /* 이미지 크기 조정 */
  background-repeat: no-repeat; /* 이미지 반복 방지 */
  position: absolute;
  width: 100%;
  height: 200px;
  z-index: 21;
  border-radius: 12px 12px 0 0; /* 위쪽 두 모서리만 라운드 */
`;

export const SectionTitle = styled.div`
  // background-color: ${({ theme }) => theme.colors.WHITE};
  display: flex;
  width: 100%;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.BLACK};
  padding: 50px 0 0 10px;
  font-weight: bold;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 6px;
`;
