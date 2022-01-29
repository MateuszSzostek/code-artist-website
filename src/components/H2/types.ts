import { FontSizeType, ColorType } from "../../GlobalTypes";

interface IH2 {
    headerStyles: {
        size: FontSizeType;
        color: ColorType;
        center?: boolean;
        underline?: boolean;
        margin?: string;
    };
}

export type { IH2 };
