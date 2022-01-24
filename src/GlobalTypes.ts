import { FontSizesEnum, ColorsEnum, GridTypeEnum } from "./GlobalEnums";

type FontSizeType = FontSizesEnum;
type ColorType = ColorsEnum;
type GridType = GridTypeEnum;

interface IFontSizes {
    small_1: FontSizesEnum.small_1;
    small_2: FontSizesEnum.small_2;
    medium_1: FontSizesEnum.medium_1;
    medium_2: FontSizesEnum.medium_2;
    medium_3: FontSizesEnum.medium_3;
    large_1: FontSizesEnum.large_1;
    large_2: FontSizesEnum.large_2;
    huge_1: FontSizesEnum.huge_1;
    huge_2: FontSizesEnum.huge_2;
    huge_3: FontSizesEnum.huge_3;
}

interface IGridType {
    double: GridTypeEnum.double;
    quadruple: GridTypeEnum.quadruple;
}

interface IColors {
    textDefault: ColorsEnum.textDefault;
    black: ColorsEnum.black;
    gray: ColorsEnum.gray;
    white_1: ColorsEnum.white_1;
    defaultBrand: ColorsEnum.defaultBrand;
    transparentDefaultBrand: ColorsEnum.transparentDefaultBrand;
    facebookBlue: ColorsEnum.facebookBlue;
    transparentDarkBlack: ColorsEnum.transparentDarkBlack;
    transparentDarkGray: ColorsEnum.transparentDarkGray;
    transparentLightGray: ColorsEnum.transparentLightGray;
}

interface IFontWeights {
    thin: string;
    normal: string;
    bold: string;
}

interface IBreakPoints {
    navigation: string;
    desktop: string;
    tablet: string;
    mobile: string;
}

export type { IFontSizes, IColors, IFontWeights, IBreakPoints, IGridType };
export type { FontSizeType, ColorType, GridType };
