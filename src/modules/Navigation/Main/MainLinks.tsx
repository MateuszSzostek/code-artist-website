import React from "react";
import "./styles.css";

import CTA from "../../../components/CTA/CTA";

import { INavigationLink } from "../../../types/modules";

import { navigationLinks } from "../../../content";

const MainLinks = () => {
  return (
    <>
      {navigationLinks.map(({ id, to, name }: INavigationLink) => (
        <CTA key={id} to={to} className="p-12 secondary-text-color">
          {name}
        </CTA>
      ))}
    </>
  );
};

export default MainLinks;
