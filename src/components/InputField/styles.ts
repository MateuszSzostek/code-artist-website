import styled, { css } from "styled-components";
import { myTheme } from "../../MyTheme";

const {
    color: { defaultBrand, white_1, black, gray },
    fontWeight: { bold },
    fontSize: { large_1, small_1 },
} = myTheme;

const Styles = {
    TextInputField: styled.input`
        border: 2px solid ${defaultBrand};
        border-radius: 5px;
        height: 32px;
        padding-left: 15px;
        padding-right: 15px;
        background-color: ${black};
        color: ${white_1};
        &::placeholder {
            font-family: "Exo", sans-serif;
            opacity: 1;
        }

        &:-ms-input-placeholder {
            font-family: "Exo", sans-serif;
        }

        &::-ms-input-placeholder {
            font-family: "Exo", sans-serif;
        }
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus {
            -webkit-text-fill-color: ${defaultBrand};
            -webkit-box-shadow: 0 0 0px 1000px #000 inset;
            transition: background-color 5000s ease-in-out 0s;
        }
    `,
    TopLabel: styled.label`
        color: ${white_1};
        margin-top: 2px;
        margin-bottom: 2px;
        font-weight: ${bold};
        font-size: ${large_1};
    `,
    Bottomlabel: styled.label`
        color: ${white_1};
        margin-top: 3px;
        color: red;
        font-size: ${small_1};
    `,
    InputFieldWrapper: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
    `,
};

export default Styles;
