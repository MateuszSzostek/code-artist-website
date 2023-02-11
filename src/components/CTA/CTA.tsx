import React, { PropsWithChildren } from "react";
import { ICTA } from "../../types/components";
import "./styles.css";

import { Link } from "gatsby";

const CTA = ({ children, to, className }: PropsWithChildren<ICTA>) => {
  const customStyles = className ? className : "";

  return (
    <Link to={to} className={`cta ${customStyles}`}>
      {children}
    </Link>
  );
};

export default CTA;
