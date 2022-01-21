import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import { IFlexCol } from "./types";

const { FlexColContainer } = Styles;

const FlexCol = ({
    children,
    flexColProperties,
}: PropsWithChildren<IFlexCol>) => {
    return (
        <FlexColContainer flexColProperties={flexColProperties}>
            {children}
        </FlexColContainer>
    );
};

export default FlexCol;
