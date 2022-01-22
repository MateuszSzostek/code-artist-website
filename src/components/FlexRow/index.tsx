import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import IFlexRow from "./types";

const { FlexRowContainer } = Styles;

const FlexRow = ({
    children,
    flexRowProperties,
}: PropsWithChildren<IFlexRow>) => {
    return (
        <FlexRowContainer flexRowProperties={flexRowProperties}>
            {children}
        </FlexRowContainer>
    );
};

export default FlexRow;
