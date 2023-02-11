import React, { PropsWithChildren } from "react";
import "../styles.css";
import "./styles.css";

import { ISectionColored } from "../../../types/components";

const SectionColored = ({
  children,
  background,
  className,
}: PropsWithChildren<ISectionColored>) => {
  return (
    <section
      className={`w-full relative flex flex-center relative ${
        className && className
      }`}
    >
      <div className="section__container z-10 flex flex-center flex-column relative">
        {children}
      </div>
      <div
        className="section__background absolute"
        style={{ background: background }}
      />
    </section>
  );
};

export default SectionColored;
