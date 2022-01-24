import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import { IP } from "./types";

const { StyledP } = Styles;
const P = ({ children, paragraphStyles }: PropsWithChildren<IP>) => {
    return <StyledP paragraphStyles={paragraphStyles}>{children}</StyledP>;
};

export default P;
export type { IP };
