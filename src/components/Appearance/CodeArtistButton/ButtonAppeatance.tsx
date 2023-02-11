import React, { PropsWithChildren } from "react";
import "./styles.css";
import { IAppereanceButton } from "../../../types/components";

const AppearanceButton = ({
  children,
  className,
}: PropsWithChildren<IAppereanceButton>) => {
  return (
    <div className={`button-appearance ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default AppearanceButton;
