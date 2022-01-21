import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import { ICover } from "./types";

const { Background } = Styles;

const Cover = ({ coverStyles }: PropsWithChildren<ICover>) => {
    return <Background coverStyles={coverStyles}></Background>;
};

export default Cover;
