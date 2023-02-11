import React from "react";
import "./styles.css";

import SectionColored from "../../../components/Section/Colored/SectionColored";
import ServicesCard from "../../../components/Card/Services";

import { servicesDescription, servicesCards } from "../../../content";
import { IContentCard } from "../../../types/components";
import ProductIconSVG from "../../../assets/images/vector/components/ProductSVGIcon";

const Services = () => {
  return (
    <SectionColored
      background="linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(230, 243, 255, 1) 40%,
      rgba(199, 228, 255, 1) 100%
    )"
    >
      <div className="services__container flex flex-column flex-center">
        <h2>
          We speak your <span>language</span>
        </h2>
        <p className="primary-text-color">{servicesDescription}</p>
        <div className="services__grid">
          {servicesCards.map((card: IContentCard) => (
            <ServicesCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </SectionColored>
  );
};

export default Services;
