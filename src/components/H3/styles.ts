import styled, { css } from "styled-components";
import { IH3 } from "./types";
import { myTheme } from "../../MyTheme";

const {
    color: { defaultBrand },
} = myTheme;

const Styles = {
    StyledH3: styled.h3<IH3>`
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
        ${({ headerStyles: { zIndex } }) =>
            zIndex !== null &&
            css`
                z-index: ${zIndex};
            `}
    `,
};

export default Styles;
