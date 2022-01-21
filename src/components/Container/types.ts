import { ColorType } from "../../GlobalTypes";
interface IContainer {
    containerProperties: {
        centerContent?: boolean;
        verticalPadding?: string;
        fullWidth?: boolean;
        backgroundColor?: ColorType;
    };
}

export type { IContainer };
