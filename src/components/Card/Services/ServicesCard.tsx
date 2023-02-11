import React from "react";
import "./styles.css";

import { IContentCard } from "../../../types/components";

const ServicesCard = ({ title, description, ImageComponent }: IContentCard) => {
  return (
    <div className="services-card__container flex flex-column">
      <>
        {ImageComponent && ImageComponent}
        {title && <h3 className="text-center">{title}</h3>}
        {description && (
          <p className="primary-text-color text-center">{description}</p>
        )}
      </>
    </div>
  );
};

export default ServicesCard;
