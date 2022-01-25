import styled, { css } from "styled-components";
import { ITag } from "./types";
import { myTheme } from "../../MyTheme";

const {
    color: { white_1 },
    fontSize: { small_2 },
} = myTheme;

const Styles = {
    Background: styled.div<ITag>`
        position: ${({ tagStyles: { position } }) =>
            position !== null ? position : "relative"};
        padding: 0.6rem 1.4rem 0.6rem 1.4rem;
        background-color: ${({ tagStyles: { color } }) =>
            color !== null && color};
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 0;
        color: ${white_1};
        z-index: 30;
        bottom: ${({ tagStyles: { bottom } }) => bottom !== null && bottom};
        font-size: ${small_2};
    `,
};

export default Styles;
