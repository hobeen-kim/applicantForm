import styled from "styled-components";
import React from "react";

export const Container = styled.div`
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    margin-top: 16px;
    justify-content: center;
`;

export const Complete = styled.div`
    border: ${({ theme }) => `1px solid ${theme.colors.GREY_HEAVY}`};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.WHITE};
    min-height: 131px;
    @media (max-width: 768px) {
        width: 100%;
    }
    width: 640px;
    padding: 24px;
    box-sizing: border-box;
    font-size: 16px;
`;
