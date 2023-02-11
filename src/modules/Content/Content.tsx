import React from "react";
import useTestImages from "../../hooks/useTestImages";
import "./styles.css";

import SectionColored from "../../components/Section/Colored/SectionColored";
import CardPrimary from "../../components/Card/Primary";

import { landingTitle, landingSubTitle, contentCards } from "../../content";
import { IContentCard } from "../../types/components";

const Content = () => {
  const images = useTestImages();

  console.log(images);

  return (
    <SectionColored background="#ccffe6">
      <div className="content__container flex flex-column flex-center">
        <h2>{landingTitle}</h2>
        <p>{landingSubTitle}</p>
        <div className="content__grid">
          {contentCards.map((card: IContentCard) => (
            <CardPrimary
              key={card.id}
              {...card}
              image={
                images.allFile.edges[(card.id as number) % 4].node
                  ?.childImageSharp?.gatsbyImageData
              }
            />
          ))}
        </div>
      </div>
    </SectionColored>
  );
};

export default Content;
