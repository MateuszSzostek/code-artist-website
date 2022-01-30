import styled, { css } from "styled-components";
import { IH1 } from "./types";

const Styles = {
    StyledH1: styled.h1<IH1>`
        font-size: ${({ headerStyles: { size } }) => size};
        color: ${({ headerStyles: { color } }) => color};
        ${({ headerStyles: { verticalMargin } }) =>
            verticalMargin !== null &&
            css`
                margin-top: ${verticalMargin};
                margin-bottom: ${verticalMargin};
            `}
    `,
};

export default Styles;
