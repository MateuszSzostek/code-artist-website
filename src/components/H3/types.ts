import { FontSizeType, ColorType } from "../../GlobalTypes";

interface IH3 {
    headerStyles: {
        size: FontSizeType;
        color: ColorType;
        center?: boolean;
        underline?: boolean;
        bold?: boolean;
        zIndex?: string;
    };
}

export type { IH3 };
