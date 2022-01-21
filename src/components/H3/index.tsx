import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import { IH3 } from "./types";

const { StyledH3 } = Styles;
const H3 = ({ children, headerStyles }: PropsWithChildren<IH3>) => {
    return <StyledH3 headerStyles={headerStyles}>{children}</StyledH3>;
};

export default H3;
