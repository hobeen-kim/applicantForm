import styled from "styled-components";
import { TextField as MuiTextField } from "@mui/material";

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 4px;
`;

export const RadioSingleContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f9fd;
  padding: 15px 10px;
  border-radius: 6px;
`;

export const Radio = styled.input`
  cursor: pointer;
  appearance: none;
  margin-top: -3px;
  vertical-align: middle;
  border: ${({ theme }) => `2px solid ${theme.colors.GREY_EXTRA_HEAVY}`};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  :checked {
    border: ${({ theme }) => `6px solid ${theme.colors.BLUE_HEAVY}`};
  }
`;

export const Label = styled.label`
  align-items: center;
  cursor: pointer;
  padding-left: 12px;
`;

export const TextField = styled(MuiTextField)`
  width: 200px;

  div {
    font-size: 14px;

    ::before {
      border-bottom: ${({ theme }) => `1px solid ${theme.colors.GREY_HEAVY}`} !important;
    }

    ::after {
      border-bottom: ${({ theme }) => `2px solid ${theme.colors.BLUE_HEAVY}`};
    }
  }
`;
