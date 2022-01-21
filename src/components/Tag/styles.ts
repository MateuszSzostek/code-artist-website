import styled, { css } from "styled-components";
import { ITag } from "./types";
import { myTheme } from "../../MyTheme";

const {
    color: { white_1, transparentLightGray },
    fontSize: { small_2 },
} = myTheme;

const Styles = {
    Background: styled.div<ITag>`
        position: absolute;
        padding: 0.6rem 1.4rem 0.6rem 1.4rem;
        background-color: ${transparentLightGray};
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: auto;
        color: ${white_1};
        z-index: 30;
        bottom: 1.5rem;
        font-size: ${small_2};
    `,
};

export default Styles;
