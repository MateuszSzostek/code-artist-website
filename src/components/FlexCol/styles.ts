import styled, { css } from "styled-components";
import { IFlexCol } from "./types";

const Styles = {
    FlexColContainer: styled.div<IFlexCol>`
        flex-direction: column;
        justify-content: flex-start;
        ${({ flexColProperties: { margin } }) =>
            typeof margin !== "undefined" &&
            css`
                margin: ${margin};
            `}
        @media (max-width: 1320px) {
            ${({ flexColProperties: { margin } }) =>
                typeof margin !== "undefined" &&
                css`
                    margin: 20px;
                `}
        }
    `,
};

export default Styles;
