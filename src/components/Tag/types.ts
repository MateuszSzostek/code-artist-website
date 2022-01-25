import { ColorType } from "../../GlobalTypes";

interface ITag {
    tagStyles: {
        color: ColorType;
        zIndex?: string;
        position?: string;
        bottom?: string;
    };
}

export type { ITag };
