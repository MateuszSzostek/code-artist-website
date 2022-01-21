import React, { PropsWithChildren } from "react";
import TextInput from "../TextInput";
import Button from "../Button";
import Styles from "./styles";
import { IButtonTextInputForm } from "./types";

const { Wrapper } = Styles;

const ButtonTextInputForm = ({
    children,
    props: { width, placeholder, onChangeFunc },
}: PropsWithChildren<IButtonTextInputForm>) => {
    return (
        <form>
            <Wrapper>
                <TextInput
                    props={{
                        width,
                        placeholder,
                        onChangeFunc,
                    }}
                />
                <Button>{children}</Button>
            </Wrapper>
        </form>
    );
};

export default ButtonTextInputForm;
