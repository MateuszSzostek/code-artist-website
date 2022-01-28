import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import IGridElement from "./types";

const { Element } = Styles;

const GridElement = ({
    gridArea,
    children,
}: PropsWithChildren<IGridElement>) => {
    return <Element gridArea={gridArea}>{children}</Element>;
};

export default GridElement;
