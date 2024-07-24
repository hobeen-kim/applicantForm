import styled from "styled-components";
import React from "react";

export const Container = styled.div`
    position: relative;
    overflow: hidden;
    margin-top: 16px;
    display: flex;
    justify-content: center; /* 가로축 중앙 정렬 */
    align-items: center; /* 세로축 중앙 정렬 */
`;

export const PartnerImage = styled.div<{ image: string }>`
    background-image: url(${({ image }) => image});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    width: 50px;
    height: 50px;
    z-index: 20;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;
