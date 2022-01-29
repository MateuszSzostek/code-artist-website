import styled, { css } from "styled-components";
import { myTheme } from "../../MyTheme";
import { IGrid } from "./types";

const {
    breakPoints: { desktop, tablet, mobile },
} = myTheme;

const Styles = {
    GridContainer: styled.div<IGrid>`
        display: grid;
        width: 100%;
        ${({ gridProperties: { margin } }) =>
            margin !== null &&
            css`
                margin: ${margin};
            `};
        ${({ gridProperties: { gridType } }) =>
            String(gridType) == "double" &&
            css`
                grid-template-columns: 1fr 1fr;
                grid-template-areas: ". .";
                @media (max-width: ${desktop}) {
                    grid-template-columns: 1fr;
                    grid-template-areas: ". ";
                }
            `};
        ${({ gridProperties: { gridType } }) =>
            String(gridType) == "triple" &&
            css`
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-areas: ". . .";
                @media (max-width: ${mobile}) {
                    grid-template-columns: 1fr 1fr;
                    grid-template-areas: ". .";
                }
            `};
        ${({ gridProperties: { gridType } }) =>
            String(gridType) == "quadruple" &&
            css`
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-template-areas: ". . . .";
                @media (max-width: ${desktop}) {
                    grid-template-columns: 1fr 1fr;
                    grid-template-areas: ". .";
                }
                @media (max-width: ${tablet}) {
                    grid-template-columns: 1fr;
                    grid-template-areas: ".";
                }
            `};

        ${({ gridProperties: { gap } }) =>
            gap !== null &&
            css`
                gap: ${gap} ${gap};
            `};
        ${({ gridProperties: { position } }) =>
            position !== null &&
            css`
                position: ${position};
            `};
    `,
};

export default Styles;
