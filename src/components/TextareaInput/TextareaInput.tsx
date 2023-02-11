import React from "react";
import "./styles.css";

import { ITextInput } from "../../types/components";

const TextareaInput = ({ label, placeholder, error, id, name }: ITextInput) => {
  return (
    <div className="input-area__wrapper flex flex-column">
      {label && (
        <label className="input__label" htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
        className="input-area__field"
        placeholder={placeholder ? placeholder : ""}
        name={name}
        id={id}
      />
      {error && <label className="input-area__error">{error}</label>}
    </div>
  );
};

export default TextareaInput;
