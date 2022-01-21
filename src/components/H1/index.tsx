import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import { IH1 } from "./types";

const { StyledH1 } = Styles;
const H1 = ({ children, headerStyles }: PropsWithChildren<IH1>) => {
    return <StyledH1 headerStyles={headerStyles}>{children}</StyledH1>;
};

export default H1;
