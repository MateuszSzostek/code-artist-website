import styled, { css } from "styled-components";
import { IH1 } from "./types";
import { myTheme } from "../../MyTheme";

const {
    breakPoints: { tablet, mobile },
    fontSize: { huge_1, large_2 },
} = myTheme;

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
        @media (max-width: ${tablet}) {
            font-size: ${huge_1};
        }
        @media (max-width: ${mobile}) {
            font-size: ${large_2};
        }
    `,
};

export default Styles;
