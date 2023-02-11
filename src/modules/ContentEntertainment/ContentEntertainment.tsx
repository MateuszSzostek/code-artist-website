import React, { PropsWithChildren } from "react";
import "./styles.css";

import { IContentEntertainment } from "../../types/modules";
import { GatsbyImage } from "gatsby-plugin-image";

import SectionColored from "../../components/Section/Colored";

const ContentEntertainment = ({ templateContent }: IContentEntertainment) => {
  console.log(templateContent);

  return (
    <SectionColored background="#000000">
      <div className="content-entertainment__image-container absolute">
        <GatsbyImage
          imgClassName="content-entertainment__image"
          image={
            templateContent?.frontmatter?.image?.childImageSharp
              ?.gatsbyImageData
          }
          alt={templateContent?.frontmatter?.alternativeText}
          objectFit="contain"
        />
      </div>
      <div className="content-entertainment__container flex">
        <article>
          <h2>{templateContent?.frontmatter?.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: templateContent?.html }} />
        </article>
        <aside></aside>
      </div>
    </SectionColored>
  );
};

export default ContentEntertainment;
