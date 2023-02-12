import React from "react";
import "./styles.css";

import Button from "../../../components/Button";

import SectionColored from "../../../components/Section/Colored/SectionColored";
import TechnologiesCard from "../../../components/Card/Technologies/TechnologiesCard";

import {
  technologiesSecondTitle,
  technologiesSubtitle,
  technologyCards,
} from "../../../content";
import { IContentCard } from "../../../types/components";
import ButtonAppearance from "../../../components/Appearance/CodeArtistButton";

import useTawk from "../../../hooks/useTawk";

const Technologies = () => {
  const { onInteractClickHandler } = useTawk();

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
          {technologiesSubtitle}
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
          {technologiesSecondTitle}
        </p>
        <Button onClick={onInteractClickHandler}>
          <ButtonAppearance className="primary-text-color">
            LET'S TALK
          </ButtonAppearance>
        </Button>
      </div>
    </SectionColored>
  );
};

export default Technologies;
