import React from "react";
import "./styles.css";
import "../styles.css";

import SubLinks from "../SubLinks";

import { companyEmail, phoneNumber } from "../../../../content";

const SubNavigationPrimary = () => {
  return (
    <nav className="sub-nav__container flex flex-space-between absolute">
      <div>
        <span className="sub-nav__text">{phoneNumber}</span>
        <span className="sub-nav__text sub-nav__gap">|</span>
        <span className="sub-nav__text">{companyEmail}</span>
      </div>
      <div>
        <SubLinks />
      </div>
    </nav>
  );
};

export default SubNavigationPrimary;
