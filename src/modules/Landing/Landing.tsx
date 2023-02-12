import React from "react";
import "./styles.css";

import SectionImage from "../../components/Section/Image";
import CTA from "../../components/CTA";
import { landingTitle, landingSubTitle, landingCTA } from "../../content";
import useLandingImage from "../../hooks/data/useLandingImage";

import ButtonAppearance from "../../components/Appearance/CodeArtistButton";
import scrollTo from "gatsby-plugin-smoothscroll";

const Landing = () => {
  const { landingImage } = useLandingImage();

  console.log(landingImage);

  return (
    <SectionImage
      className="landing__section z-0"
      backgroundImage={landingImage?.file?.childImageSharp?.gatsbyImageData}
    >
      <div className="landing__container flex flex-column absolute">
        <header>
          <h1>{landingTitle}</h1>
          <p>{landingSubTitle}</p>
          <div
            className="inline-block mt-8 cursor-pointer"
            onClick={() => scrollTo("#contact-form")}
          >
            <ButtonAppearance>{landingCTA.name}</ButtonAppearance>
          </div>
        </header>
      </div>
    </SectionImage>
  );
};

export default Landing;
