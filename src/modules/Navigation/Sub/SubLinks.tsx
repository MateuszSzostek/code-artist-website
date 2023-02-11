import React from "react";
import "./styles.css";

import CTA from "../../../components/CTA/CTA";

import { INavigationLink } from "../../../types/modules";

import { subNavigationLinks } from "../../../content";

const SubLinks = () => {
  return (
    <>
      {subNavigationLinks.map(({ id, to, name }: INavigationLink) => (
        <CTA key={id} to={to} className="sub-nav__text p-12">
          {name}
        </CTA>
      ))}
    </>
  );
};

export default SubLinks;
