import React from "react";
import Styles from "./styles";
import { ITextareaInputField } from "./types";
import { useIntl } from "gatsby-plugin-react-intl";

const { TextareaInputField, TopLabel, Bottomlabel, TextAreaInputFieldWrapper } =
    Styles;
const Textarea = ({
    textAreaInputFieldProperties: {
        placeholderText,
        topLabelText,
        bottomLabelText,
        id,
    },
    textAreaInputFieldProperties,
}: ITextareaInputField) => {
    console.log(textAreaInputFieldProperties);
    const intl = useIntl();
    return (
        <TextAreaInputFieldWrapper>
            <TopLabel>{intl.formatMessage({ id: topLabelText })}</TopLabel>
            <TextareaInputField
                placeholder={placeholderText}
                id={id}
                name={id}
            ></TextareaInputField>
            <Bottomlabel>
                {intl.formatMessage({ id: bottomLabelText })}
            </Bottomlabel>
        </TextAreaInputFieldWrapper>
    );
};

export default Textarea;
