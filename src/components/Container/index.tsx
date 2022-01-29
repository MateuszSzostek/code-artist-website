import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import { IContainer } from "./types";

const { Wrapper, Content } = Styles;

const Container = ({
    children,
    containerProperties,
}: PropsWithChildren<IContainer>) => {
    return (
        <Wrapper containerProperties={containerProperties}>
            <Content>{children}</Content>
        </Wrapper>
    );
};

export default Container;
