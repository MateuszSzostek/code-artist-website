import React from "react";
import { IPill } from "../../../types/components";
import "./styles.css";

const PrimaryPill = ({ label }: IPill) => {
  return <div className="primary-pill z-55">{label}</div>;
};

export default PrimaryPill;
