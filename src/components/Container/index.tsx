import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import { IContainer } from "./types";

const { Wrapper, Content } = Styles;

const Button = ({
    children,
    containerProperties,
}: PropsWithChildren<IContainer>) => {
    return (
        <Wrapper containerProperties={containerProperties}>
            <Content>{children}</Content>
        </Wrapper>
    );
};

export default Button;
