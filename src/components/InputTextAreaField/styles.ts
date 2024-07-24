import styled from "styled-components";
import { TextField as MuiTextField } from "@mui/material";
import { InputTypes } from "../../store";

export const TextAreaField = styled(MuiTextField)<{
  $inputType: string;
}>`
    width: ${({ $inputType }) => ($inputType === InputTypes.TEXT ? "295px" : "590px")};

    textarea {
        font-size: 14px;
        height: ${({ $inputType }) => ($inputType === InputTypes.TEXT ? "auto" : "180px")}; // Adjust height as needed
    }

    div {
        font-size: 14px;

        ::before {
            border-bottom: ${({ theme }) => `1px solid ${theme.colors.GREY_HEAVY}`} !important;
        }

        ::after {
            border-bottom: ${({ theme }) => `2px solid ${theme.colors.PURPLE_HEAVY}`};
        }
    }
`;
