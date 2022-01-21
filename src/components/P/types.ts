import { FontSizeType, ColorType } from "./../../GlobalTypes";

interface IP {
    paragraphStyles: {
        size: FontSizeType;
        color: ColorType;
        center?: boolean;
        width?: string;
        verticalMargin?: string;
    };
}

export type { IP };
