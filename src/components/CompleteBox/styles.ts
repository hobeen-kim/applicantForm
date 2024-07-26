import styled from "styled-components";
import React from "react";

export const Container = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 16px;
  justify-content: center;
  border: 1px solid #ececec;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
`;

export const Complete = styled.div`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  min-height: 131px;
  @media (max-width: 768px) {
    width: 100%;
  }
  width: 640px;
  padding: 24px 40px 40px 40px;
  box-sizing: border-box;
  font-size: 16px;
`;
