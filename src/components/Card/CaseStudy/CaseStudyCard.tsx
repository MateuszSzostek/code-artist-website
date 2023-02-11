import React from "react";
import "./styles.css";
import { GatsbyImage } from "gatsby-plugin-image";

import PillCodeArtist from "../../Pill/Secondary/SecondaryPill";
import CTA from "../../CTA";

import { IContentCard } from "../../../types/components";

const CaseStudyCard = ({
  id,
  title,
  image,
  altImg,
  action,
  action: { name, cta },
  tags,
}: IContentCard) => {
  console.log(title);
  return (
    <CTA to={cta.to} className="case-study-card__wrapper">
      <div className="case-study-card__container relative flex flex-center">
        {image && (
          <GatsbyImage
            className="case-study-card__image-wrapper absolute"
            imgClassName="case-study-card__image"
            image={image}
            alt={altImg ? altImg : "content card image"}
            objectFit="cover"
          />
        )}
        <div />
        {title && (
          <h3 className="case-study-card__title z-55 relative text-center">
            {title}
          </h3>
        )}
        {tags && (
          <div className="case-study-card__tags-wrapper absolute flex">
            {tags.map((tag) => (
              <PillCodeArtist key={tag} label={tag} />
            ))}
          </div>
        )}
      </div>
    </CTA>
  );
};

export default CaseStudyCard;
