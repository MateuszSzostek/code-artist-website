import React from "react";
import "./styles.css";

import SectionImage from "../../components/Section/Image";
import CTA from "../../components/CTA";
import { landingTitle, landingSubTitle, landingCTA } from "../../content";
import useLandingImage from "../../hooks/data/useLandingImage";

import ButtonAppearance from "../../components/Appearance/CodeArtistButton";

const ContentLanding = () => {
  const { landingImage } = useLandingImage();

  console.log(landingImage);

  return (
    <SectionImage
      className="content-landing__container z-0 absolute"
      backgroundImage={landingImage?.file?.childImageSharp?.gatsbyImageData}
    ></SectionImage>
  );
};

export default ContentLanding;
