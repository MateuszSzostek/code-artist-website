import React from "react";
import { IPill } from "../../../types/components";
import "./styles.css";

const SecondaryPill = ({ label }: IPill) => {
  return <div className="secondary-pill z-55">{label}</div>;
};

export default SecondaryPill;
