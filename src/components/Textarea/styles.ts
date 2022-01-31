import styled, { css } from "styled-components";
import { myTheme } from "../../MyTheme";

const {
    color: { defaultBrand, white_1, black },
    fontSize: { small_1, large_1 },
    fontWeight: { bold },
    breakPoints: { desktop },
} = myTheme;

const Styles = {
    TextareaInputField: styled.textarea`
        border: 2px solid ${defaultBrand};
        border-radius: 5px;
        height: 208px;
        padding: 10px 15px 10px 15px;
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
    TextAreaInputFieldWrapper: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 15px;
        @media (max-width: ${desktop}) {
            margin-left: 0px;
        }
    `,
};

export default Styles;
