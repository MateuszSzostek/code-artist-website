import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import { ITextInput } from "./types";

const { Wrapper, Field, Label } = Styles;

const TextInput = ({
    children,
    props: { width, placeholder, onChangeFunc },
}: PropsWithChildren<ITextInput>) => {
    return (
        <Wrapper>
            <Label>{children}</Label>
            <Field
                type="text"
                placeholder={placeholder}
                onChange={() => onChangeFunc()}
                width={width}
            />
        </Wrapper>
    );
};

export default TextInput;
