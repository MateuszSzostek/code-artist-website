import React from "react";
import "./styles.css";

import { IMobileNav } from "../../../types/components";

import MainLinks from "../Main/MainLinks";
import SubLinks from "../Sub/SubLinks";

const MobileNavigation = ({ opened }: IMobileNav) => {
  return (
    <div
      className={`mobile-nav__container flex flex-center flex-column z-50 ${
        opened ? "mobile-nav__container-active" : ""
      }`}
    >
      <MainLinks />
      <SubLinks />
    </div>
  );
};

export default MobileNavigation;
