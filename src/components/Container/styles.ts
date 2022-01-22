import styled, { css } from "styled-components";
import { myTheme } from "../../MyTheme";
import { IContainer } from "./types";

const {
    breakPoints: { desktop },
} = myTheme;

const Styles = {
    Wrapper: styled.section<IContainer>`
        display: flex;
        flex-direction: column;
        z-index: 50;

        ${({ containerProperties: { backgroundColor } }) =>
            backgroundColor !== null &&
            css`
                background-color: ${backgroundColor};
            `}

        ${({ containerProperties: { fullWidth } }) =>
            fullWidth !== null && fullWidth === true
                ? css`
                      width: 100%;
                  `
                : css`
                      width: ${desktop};
                  `}

        ${({ containerProperties: { centerContent } }) =>
            centerContent !== null &&
            centerContent === true &&
            css`
                justify-content: center;
                align-items: center;
            `}

        ${({ containerProperties: { verticalPadding } }) =>
            verticalPadding !== null &&
            css`
                padding-top: ${verticalPadding};
                padding-bottom: ${verticalPadding};
            `}

        @media (max-width: ${desktop}) {
            max-width: 100%;
        }
    `,
    Content: styled.div`
        margin-left: 15px;
        margin-right: 15px;
    `,
};

export default Styles;
