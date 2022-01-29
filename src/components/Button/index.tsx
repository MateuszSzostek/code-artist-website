import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import { IButton } from "./types";

const { Btn, BtnWrapper, BorderBottom, BorderLeft, BorderRight, BorderTop } =
    Styles;

const Button = ({ children, buttonProperties }: PropsWithChildren<IButton>) => {
    return (
        <BtnWrapper buttonProperties={buttonProperties}>
            <Btn>{children}</Btn>
            <BorderRight />
            <BorderTop />
            <BorderLeft />
            <BorderBottom />
        </BtnWrapper>
    );
};

export default Button;
