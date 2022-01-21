import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import { IH2 } from "./types";

const { StyledH2 } = Styles;
const H2 = ({ children, headerStyles }: PropsWithChildren<IH2>) => {
    return <StyledH2 headerStyles={headerStyles}>{children}</StyledH2>;
};

export default H2;
