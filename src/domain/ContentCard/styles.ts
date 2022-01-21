import styled, { css } from "styled-components";
import { IPicture } from "../../components/Icon/types";
import { myTheme } from "../../MyTheme";
import { IPictures, IWrapper, ITitleTop, ITitleBottom, IText } from "./types";
import { gridTypes, cardsWidths, fontColorsLookupTable } from "./helpers";

const {
    color: { black, white },
    fontSize: { huge, large, normal, small },
} = myTheme;

const Styles = {
    Wrapper: styled.div<IWrapper>`
        padding: 0 36px 36px 36px;
        margin: 12px 0 12px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${black};
        max-width: ${({ imagesAmount }) => cardsWidths[imagesAmount]};
    `,
    TitleTop: styled.h2<ITitleTop>`
        text-align: center;
        font-size: ${huge};
        color: ${({ category }) => fontColorsLookupTable[category]};
        padding-top: 5px;
    `,
    TitleBottom: styled.h3<ITitleBottom>`
        text-align: center;
        margin: 10px;
        font-size: ${large};
        color: ${({ category }) => fontColorsLookupTable[category]};
    `,
    Pictures: styled.div<IPictures>`
        display: grid;
        //inject desired grid layout:
        ${({ imagesAmount, layout }) => gridTypes[layout][imagesAmount]}
    `,
    Source: styled.a`
        font-size: ${small};
        color: ${white};
        margin: 0;
        opacity: 0.5;
    `,
    Text: styled.p<IText>`
        text-align: center;
        margin-top: 0;
        font-size: ${normal};
        color: ${white};
    `,
    Divider: styled.div`
        width: calc(100% - 24px);
        height: 1px;
        background-color: white;
        margin: 10px 0 10px 0;
    `,
};

export default Styles;
