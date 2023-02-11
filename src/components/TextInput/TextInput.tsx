import React from "react";
import "./styles.css";

import { ITextInput } from "../../types/components";

const TextInput = ({ label, placeholder, error, id, name }: ITextInput) => {
  return (
    <div className="input__wrapper flex flex-column">
      {label && <label className="input__label">{label}</label>}
      <input
        className="input__field"
        placeholder={placeholder ? placeholder : ""}
      />
      {error && <label className="input__error">{error}</label>}
    </div>
  );
};

export default TextInput;
