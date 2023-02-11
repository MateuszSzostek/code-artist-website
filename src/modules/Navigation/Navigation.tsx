import React from "react";

import SectionColored from "../../components/Section/Colored";
import NavigationAction from "./Main/Action";
import SubNavigationPrimary from "./Sub/Primary";

const Navigation = () => {
  return (
    <SectionColored
      className="z-20"
      background="linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)"
    >
      <div
        style={{ height: "120px" }}
        className=" z-10 flex flex-center flex-column relative w-full"
      >
        <SubNavigationPrimary />
        <NavigationAction />
      </div>
    </SectionColored>
  );
};

export default Navigation;
