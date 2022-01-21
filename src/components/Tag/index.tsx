import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import { ITag } from "./types";

const { Background } = Styles;
const Tag = ({ children, tagStyles }: PropsWithChildren<ITag>) => {
    return <Background tagStyles={tagStyles}>{children}</Background>;
};

export default Tag;
