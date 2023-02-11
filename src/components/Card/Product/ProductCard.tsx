import React from "react";
import "./styles.css";
import { GatsbyImage } from "gatsby-plugin-image";

import PillCodeArtistSecondary from "../../Pill/Secondary/SecondaryPill";
import AppearanceCodeArtistButton from "../../Appearance/CodeArtistButton";
import CTA from "../../CTA";

import { IContentCard } from "../../../types/components";

const ProductCard = ({
  id,
  title,
  image,
  altImg,
  action,
  action: { name, cta },
  tags,
  description,
}: IContentCard) => {
  console.log(title);
  return (
    <div className="product-card__wrapper flex relative">
      {image && (
        <GatsbyImage
          className="product-card__background-image-wrapper absolute"
          imgClassName="product-card__background-image"
          image={image}
          alt={altImg ? altImg : "content card image"}
          objectFit="cover"
        />
      )}
      {image && (
        <GatsbyImage
          className="product-card__image-wrapper"
          imgClassName="product-card__image"
          image={image}
          alt={altImg ? altImg : "content card image"}
          objectFit="cover"
        />
      )}
      <div className="product-card__info-wrapper z-55 relative flex flex-column">
        {title && <h3 className="product-card__title text-left">{title}</h3>}
        {tags && (
          <div className="product-card__tags-wrapper">
            {tags.map((tag) => (
              <PillCodeArtistSecondary key={tag} label={tag} />
            ))}
          </div>
        )}
        {description && (
          <p className="product-card__description" text-left>
            {description}
          </p>
        )}
        <div className="product-card__actions-container z-55 absolute flex">
          <CTA to="">
            <AppearanceCodeArtistButton>LEARN MORE</AppearanceCodeArtistButton>
          </CTA>
          <CTA to="">
            <AppearanceCodeArtistButton>
              GO TO WEBSITE
            </AppearanceCodeArtistButton>
          </CTA>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
