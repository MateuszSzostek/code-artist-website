import { GridType } from "../../GlobalTypes";

interface IGrid {
    gridProperties: {
        position?: string;
        gap?: string;
        gridType: GridType;
    };
}

export type { IGrid };
