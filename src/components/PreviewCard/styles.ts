import styled from "styled-components";
import React from "react";

export const Container = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 16px;
  justify-content: center;
`;

export const Card = styled.div<{ needToRed: boolean, isTitle: boolean }>`
  display: flex;
  flex-direction: column;
  border: ${({ theme, needToRed, isTitle }) => {
    if (isTitle) {
      return `none`;
    }
    if (needToRed) {
      return `1px solid ${theme.colors.RED}`;
    }
    return `1px solid ${theme.colors.GREY_HEAVY}`;
  }};
    
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  min-height: 131px;
  @media (max-width: 768px) {
      width: 95%;
  }
  width: 640px;
  padding: 24px;
  margin: 10px;
  box-sizing: border-box;
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
