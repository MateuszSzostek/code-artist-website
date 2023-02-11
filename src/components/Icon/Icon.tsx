import React, { PropsWithChildren } from "react";
import { IIcon } from "../../types/components";
import "./styles.css";

const Icon = ({ children, width, height }: PropsWithChildren<IIcon>) => {
  return (
    <div
      className="icon"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {children}
    </div>
  );
};

export default Icon;
