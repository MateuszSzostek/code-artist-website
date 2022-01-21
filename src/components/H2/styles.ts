import styled, { css } from "styled-components";
import { IH2 } from "./types";
import { myTheme } from "../../MyTheme";

const {
    color: { defaultBrand },
} = myTheme;

const Styles = {
    StyledH2: styled.h2<IH2>`
        font-size: ${({ headerStyles: { size } }) => size};
        color: ${({ headerStyles: { color } }) => color};
        ${({ headerStyles: { center } }) =>
            center !== null &&
            center === true &&
            css`
                text-align: center;
            `}
        ${({ headerStyles: { underline } }) =>
            underline !== null &&
            underline === true &&
            css`
                text-decoration-thickness: 3px;
                text-decoration: underline;
                text-decoration-color: ${defaultBrand};
            `}
    `,
};

export default Styles;
