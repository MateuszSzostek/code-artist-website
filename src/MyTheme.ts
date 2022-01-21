import { DefaultTheme } from "styled-components";
import {
    IFontSizes,
    IColors,
    IFontWeights,
    IBreakPoints,
    IGridType,
} from "./GlobalTypes";
import {
    FontSizesEnum,
    ColorsEnum,
    FontWeightsEnum,
    BreakPointsEnum,
    GridTypeEnum,
} from "./GlobalEnums";

interface MyTheme extends DefaultTheme {
    color: IColors;
    fontSize: IFontSizes;
    fontWeight: IFontWeights;
    breakPoints: IBreakPoints;
    gridType: IGridType;
}

const myTheme: MyTheme = {
    color: ColorsEnum,
    fontSize: FontSizesEnum,
    fontWeight: FontWeightsEnum,
    breakPoints: BreakPointsEnum,
    gridType: GridTypeEnum,
};

export { myTheme };
