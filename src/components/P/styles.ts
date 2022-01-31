import styled, { css } from "styled-components";
import { IP } from "./types";

const Styles = {
    StyledP: styled.p<IP>`
        font-size: ${({ paragraphStyles: { size } }) => size};
        color: ${({ paragraphStyles: { color } }) => color};
        ${({ paragraphStyles: { center } }) =>
            center !== null &&
            center === true &&
            css`
                text-align: center;
                margin-left: auto;
                margin-right: auto;
            `}
        ${({ paragraphStyles: { width } }) =>
            width !== null &&
            css`
                max-width: ${width};
            `}
        ${({ paragraphStyles: { verticalMargin } }) =>
            verticalMargin !== null &&
            css`
                margin-top: ${verticalMargin};
                margin-bottom: ${verticalMargin};
            `}
        ${({ paragraphStyles: { horizontalMargin } }) =>
            horizontalMargin !== null &&
            css`
                margin-left: ${horizontalMargin};
                margin-right: ${horizontalMargin};
            `}
    `,
};

export default Styles;
