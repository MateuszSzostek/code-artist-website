import React from "react";
import "./styles.css";

import CTA from "../../../components/CTA";

import SectionColored from "../../../components/Section/Colored/SectionColored";
import TechnologiesCard from "../../../components/Card/Technologies/TechnologiesCard";

import {
  landingTitle,
  landingSubTitle,
  technologyCards,
} from "../../../content";
import { IContentCard } from "../../../types/components";
import ButtonAppearance from "../../../components/Appearance/CodeArtistButton";

const Technologies = () => {
  return (
    <SectionColored
      background="linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(230, 243, 255, 1) 40%,
      rgba(199, 228, 255, 1) 100%
    )"
    >
      <div className="technologies__container flex flex-column flex-center">
        <h2 className="text-center technologies__text">
          Technologies <span>we use</span>
        </h2>
        <p className="technologies__text primary-text-color text-center">
          {landingSubTitle}
        </p>
        <div className="technologies__grid flex flex-center">
          {technologyCards.map((card: IContentCard) => (
            <TechnologiesCard key={card.id} {...card} />
          ))}
        </div>
        <h2 className="technologies__text text-center">
          We <span>don't stop</span> there
        </h2>
        <p className=" technologies__text text-center primary-text-color">
          Cras dictum blandit ante, sed consectetur ante laoreet id. Maecenas
          blandit ex ac lacus suscipit faucibus. Donec convallis fermentum
          augue. Praesent varius massa non massa porttitor pellentesque. Nunc mi
          nunc,{" "}
        </p>
        <CTA to="/" className="inline-block mt-8">
          <ButtonAppearance className="primary-text-color">
            LET'S TALK
          </ButtonAppearance>
        </CTA>
      </div>
    </SectionColored>
  );
};

export default Technologies;
