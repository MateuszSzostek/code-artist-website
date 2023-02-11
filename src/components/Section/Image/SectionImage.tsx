import React, { PropsWithChildren } from "react";
import "../styles.css";
import "./styles.css";

import { GatsbyImage } from "gatsby-plugin-image";

import { ISectionImage } from "../../../types/components";

const SectionImage = ({
  children,
  backgroundImage,
  className,
}: PropsWithChildren<ISectionImage>) => {
  console.log(backgroundImage);
  return (
    <section
      className={`w-full flex flex-center relative ${className && className}`}
    >
      <div className="section__container z-10">{children}</div>
      <GatsbyImage
        className="section__background absolute"
        image={backgroundImage}
        alt="Landing background image TODO"
        objectFit="cover"
      />
    </section>
  );
};

export default SectionImage;
