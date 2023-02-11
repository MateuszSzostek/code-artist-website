import React from "react";
import "./styles.css";

import SectionColored from "../../../components/Section/Colored/SectionColored";
import CardCodeArtistCaseStudy from "../../../components/Card/CaseStudy";

import { caseStudyDescription, contentCards } from "../../../content";
import { IContentCard } from "../../../types/components";
import useCaseStudyImages from "../../../hooks/data/useCaseStudyImages";

const CaseStudies = () => {
  const { caseStudyImages } = useCaseStudyImages();

  console.log(caseStudyImages);

  return (
    <SectionColored background="#000000">
      <div className="case-studies__container flex flex-column flex-center w-full text-center">
        <h2>
          Case <span>Studies</span>
        </h2>
        <p className="text-center w-max-820">{caseStudyDescription}</p>
        <div className="case-studies__grid">
          {contentCards.map((card: IContentCard) => (
            <CardCodeArtistCaseStudy
              key={card.id}
              {...card}
              image={
                caseStudyImages?.allFile?.edges[(card.id as number) - 1].node
                  ?.childImageSharp?.gatsbyImageData
              }
            />
          ))}
        </div>
      </div>
    </SectionColored>
  );
};

export default CaseStudies;
