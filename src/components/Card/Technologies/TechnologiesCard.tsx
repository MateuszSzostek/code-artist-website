import React from "react";
import { IContentCard } from "../../../types/components";
import "./styles.css";
import CTA from "../../CTA";

const TechnologiesCard = ({
  title,
  action: { cta },
  ImageComponent,
}: IContentCard) => {
  console.log(title);
  return (
    <CTA to={cta.to} className="technologies-card__wrapper">
      {ImageComponent}
    </CTA>
  );
};

export default TechnologiesCard;
