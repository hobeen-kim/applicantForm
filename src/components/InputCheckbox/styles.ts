import styled from "styled-components";
import { TextField as MuiTextField } from "@mui/material";
import CheckboxImage from '../../assets/checkbox.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    width: 16px;
    height: 16px;
    border: 1px solid ${({ theme }) => theme.colors.GREY_HEAVY};
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    outline: none;
    margin-right: 8px;

    &:checked {
        border: 1px solid ${({ theme }) => theme.colors.BLUE_MEDIUM};
        background-image: url(${CheckboxImage});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
    }
`;
