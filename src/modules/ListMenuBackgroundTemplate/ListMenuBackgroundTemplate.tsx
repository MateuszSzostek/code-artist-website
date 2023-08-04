import React from "react";
import "./styles.css";
import SectionImage from "../../components/Section/Image";
import useLandingImage from "../../hooks/data/useLandingImage";

const ListMenuBackgroundTemplate = () => {
  const { landingImage } = useLandingImage();

  return (
    <>
      <SectionImage
        className="list-template__section z-0"
        backgroundImage={landingImage?.file?.childImageSharp?.gatsbyImageData}
      />
    </>
  );
};

export default ListMenuBackgroundTemplate;
