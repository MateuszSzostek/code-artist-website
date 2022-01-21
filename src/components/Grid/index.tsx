import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import { IGrid } from "./types";

const { GridContainer } = Styles;

const Grid = ({ children, gridProperties }: PropsWithChildren<IGrid>) => {
    return (
        <GridContainer gridProperties={gridProperties}>
            {children}
        </GridContainer>
    );
};

export default Grid;
