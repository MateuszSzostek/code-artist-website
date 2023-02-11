import React from "react";
import useAboutUsImages from "../../../hooks/data/useAboutUsImages";
import "./styles.css";

import { GatsbyImage } from "gatsby-plugin-image";
import SectionColored from "../../../components/Section/Colored/SectionColored";

import { landingSubTitle } from "../../../content";

const AboutUs = () => {
  const { aboutUsImages } = useAboutUsImages();

  return (
    <SectionColored
      background="linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(230, 243, 255, 1) 40%,
      rgba(199, 228, 255, 1) 100%
    )"
    >
      <div className="about-us__container flex flex-column flex-center relative">
        <h2>
          About <span>us</span>
        </h2>
        <p className="primary-text-color text-center w-max-820">
          {landingSubTitle}
        </p>
        <div className="about-us__grid-border-1 absolute" />
        <div className="about-us__grid-border-2 absolute" />
        <div className="about-us__grid flex flex-center">
          <div className="about-us__text-area text-area-1">
            <h3>
              Lorem Ipsum <span>bus las lobas</span>
            </h3>
          </div>
          <div className="image-area-1">
            <GatsbyImage
              className="about-us__image-wrapper"
              image={
                aboutUsImages.allFile.edges[0].node?.childImageSharp
                  ?.gatsbyImageData
              }
              alt="afsaf"
            />
          </div>
          <div className="about-us__text-area text-area-2">
            <p className="primary-text-color">
              Suscipit faucibus. Donec convallis fermentum augue. Praesent
              varius massa non massa porttitor pellentesque. Nunc mi nunc, Cras
              dictum blandit ante, sed consectetur ante laoreet id. Maecenas
              blandit ex ac lacus suscipit faucibus. Donec convallis fermentum
              augue. Praesent varius massa.
            </p>
          </div>
          <div className="image-area-2">
            <GatsbyImage
              className="about-us__image-wrapper"
              image={
                aboutUsImages.allFile.edges[1].node?.childImageSharp
                  ?.gatsbyImageData
              }
              alt="afsaf"
            />
          </div>
          <div className="about-us__text-area text-area-3">
            <p className="primary-text-color">
              {" "}
              Suscipit faucibus. Donec convallis fermentum augue. Praesent
              varius massa non massa porttitor pellentesque. Nunc mi nunc, Cras
              dictum blandit ante, sed consectetur ante laoreet id. Maecenas
              blandit ex ac lacus suscipit faucibus. Donec convallis fermentum
              augue. Praesent varius massa.
            </p>
          </div>
          <div className="image-area-3">
            <GatsbyImage
              className="about-us__image-wrapper"
              image={
                aboutUsImages.allFile.edges[2].node?.childImageSharp
                  ?.gatsbyImageData
              }
              alt="afsaf"
            />
          </div>
          <div className="about-us__text-area text-area-4">
            <p>
              Cras dictum blandit ante, sed consectetur ante laoreet id.
              Maecenas blandit ex ac lacus suscipit faucibus. Donec convallis
              fermentum augue. Praesent varius massa non massa porttitor
              pellentesque. Nunc mi nunc, Cras dictum blandit ante, sed
              consectetur ante laoreet id. Maecenas blandit ex ac lacus suscipit
              faucibus. Donec convallis fermentum augue. Praesent varius massa
              non massa porttitor pellentesque. Nunc mi nunc, Cras dictum
              blandit ante, sed consectetur ante laoreet id. Maecenas blandit ex
              ac lacus suscipit faucibus. Donec convallis fermentum augue.
              Praesent varius massa.
            </p>
          </div>
          <div className="image-area-4">
            <GatsbyImage
              className="about-us__image-wrapper"
              image={
                aboutUsImages.allFile.edges[3].node?.childImageSharp
                  ?.gatsbyImageData
              }
              alt="afsaf"
            />
          </div>
          <div className="about-us__text-area text-area-5">
            <p className="primary-text-color">
              {" "}
              Suscipit faucibus. Donec convallis fermentum augue. Praesent
              varius massa non massa porttitor pellentesque. Nunc mi nunc, Cras
              dictum blandit ante, sed consectetur ante laoreet id. Maecenas
              blandit ex ac lacus suscipit faucibus. Donec convallis fermentum
              augue. Praesent varius massa.
            </p>
          </div>
          <div className="image-area-5">
            <GatsbyImage
              className="about-us__image-wrapper"
              image={
                aboutUsImages.allFile.edges[4].node?.childImageSharp
                  ?.gatsbyImageData
              }
              alt="afsaf"
            />
          </div>
          <div className="about-us__text-area text-area-6">
            <p className="primary-text-color">
              {" "}
              Suscipit faucibus. Donec convallis fermentum augue. Praesent
              varius massa non massa porttitor pellentesque. Nunc mi nunc, Cras
              dictum blandit ante, sed consectetur ante laoreet id. Maecenas
              blandit ex ac lacus suscipit faucibus. Donec convallis fermentum
              augue. Praesent varius massa.
            </p>
          </div>
        </div>
        <h2 className="text-center">
          Suscipit faucibus. Donec convallis <span>fermentum augue</span>.
          Praesent varius massa non massa porttitor <span>pellentesque</span>.
          Nunc mi <span>nunc</span>.{" "}
        </h2>
      </div>
    </SectionColored>
  );
};

export default AboutUs;
