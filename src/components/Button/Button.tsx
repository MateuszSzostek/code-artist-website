import React, { PropsWithChildren } from "react";
import "./styles.css";
import AppearanceButton from "../Appearance/CodeArtistButton/ButtonAppeatance";

import { IButton } from "../../types/components";

const Button = ({ children, onClick }: PropsWithChildren<IButton>) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
