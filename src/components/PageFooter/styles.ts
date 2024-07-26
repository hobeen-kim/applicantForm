import styled from "styled-components";
import React from "react";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PartnerName = styled.div`
  font-size: 12px;
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.GREY_EXTRA_HEAVY};
`;

export const MonthlerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const Monthler = styled.div`
  position: relative;
  height: 30px;
  cursor: pointer;
  margin-left: 10px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
  }
`;

export const MonthlerImage = styled.img`
  cursor: pointer;
  width: auto;
  height: 20px;
  &:hover {
    opacity: 0.8;
  }
`;
