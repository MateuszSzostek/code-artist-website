import styled, { css } from "styled-components";
import { ICover } from "./types";

const Styles = {
    Background: styled.div<ICover>`
        position: absolute;
        width: 100%;
        height: 100%;

        ${({ coverStyles: { color } }) =>
            color !== null &&
            css`
                background-color: ${color};
            `}

        ${({ coverStyles: { zIndex } }) =>
            zIndex !== null &&
            css`
                z-index: ${zIndex};
            `}
    `,
};

export default Styles;
