import styled, { css } from "styled-components";
import { myTheme } from "../../MyTheme";

import { btnColors } from "./helpers";

const borderWidth = "2px";
const borderRadius = "5px";

const {
    color: { white_1, defaultBrand, transparentDefaultBrand },
    fontSize: { medium_1 },
} = myTheme;

const Styles = {
    BtnWrapper: styled.div`
        position: relative;
        transition: 0.5s;
        &:hover {
            background-color: ${transparentDefaultBrand};
        }
    `,
    Btn: styled.button`
        position: relative;
        font-family: "Exo", sans-serif;
        background-color: transparent;
        color: ${white_1};
        padding: 12px 17px 12px 17px;
        font-size: ${medium_1};
        font-weight: 500;
        outline: none;
        transition: 0.3s;
        border: none;
        z-index: 20;
        &:hover {
            cursor: pointer;
        }
    `,
    BorderTop: styled.div`
        top: 0;
        position: absolute;
        border-top-left-radius: ${borderRadius};
        border-top-right-radius: ${borderRadius};
        width: 100%;
        background-color: rgba(210, 210, 210, 1);
        height: ${borderWidth};
    `,
    BorderBottom: styled.div`
        bottom: 0;
        position: absolute;
        border-bottom-left-radius: ${borderRadius};
        border-bottom-right-radius: ${borderRadius};
        width: 100%;
        background-color: ${defaultBrand};
        height: ${borderWidth};
    `,
    BorderLeft: styled.div`
        top: 0;
        left: 0;
        position: absolute;
        border-top-left-radius: ${borderRadius};
        border-bottom-left-radius: ${borderRadius};
        width: ${borderWidth};
        background: linear-gradient(
            0deg,
            rgba(20, 133, 212, 1) 35%,
            rgba(210, 210, 210, 1) 100%
        );
        height: 100%;
    `,
    BorderRight: styled.div`
        top: 0;
        right: 0;
        position: absolute;
        border-top-right-radius: ${borderRadius};
        border-bottom-right-radius: ${borderRadius};
        width: ${borderWidth};
        background: linear-gradient(
            0deg,
            rgba(20, 133, 212, 1) 35%,
            rgba(210, 210, 210, 1) 100%
        );
        height: 100%;
    `,
};

export default Styles;
