import React from "react";
import "./styles.css";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { IContentCard } from "../../../types/components";

const ContentCard = ({
  title,
  description,
  image,
  altImg,
  timestamp,
  action,
}: IContentCard) => {
  console.log(timestamp);

  const dateObj = timestamp && new Date(timestamp * 1000);
  console.log(dateObj);
  const contentDate =
    typeof dateObj !== "undefined"
      ? `${dateObj.getDate()}.${
          dateObj.getMonth() + 1
        }.${dateObj.getFullYear()}`
      : "";
  console.log(contentDate);
  return (
    <Link
      to={`${action?.cta?.to}`}
      className="content-card__container flex flex-row"
    >
      <div className="content-card__image-container">
        {image && (
          <GatsbyImage
            class="content-card__image-styles"
            imgClassName="content-card__image-styles"
            image={image}
            alt={altImg ? altImg : "content card picture"}
          />
        )}
      </div>
      <div className="flex flex-column">
        {title && <h3 className="brand-text-color">{title.toUpperCase()}</h3>}
        {contentDate && (
          <span className="secondary-text-color">{contentDate}</span>
        )}
        {description && <p className="secondary-text-color">{description}</p>}
      </div>
    </Link>
  );
};

export default ContentCard;
