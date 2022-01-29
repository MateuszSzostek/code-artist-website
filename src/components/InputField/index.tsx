import React from "react";
import Styles from "./styles";
import { IInputField } from "./types";
import { useIntl } from "gatsby-plugin-react-intl";

const { TextInputField, TopLabel, Bottomlabel, InputFieldWrapper } = Styles;
const InputField = ({
    inputFieldProperties: {
        placeholderText,
        topLabelText,
        bottomLabelText,
        id,
    },
    inputFieldProperties,
}: IInputField) => {
    console.log(inputFieldProperties);
    const intl = useIntl();
    return (
        <InputFieldWrapper>
            <TopLabel>{intl.formatMessage({ id: topLabelText })}</TopLabel>
            <TextInputField
                placeholder={placeholderText}
                id={id}
                name={id}
            ></TextInputField>
            <Bottomlabel>
                {intl.formatMessage({ id: bottomLabelText })}
            </Bottomlabel>
        </InputFieldWrapper>
    );
};

export default InputField;
