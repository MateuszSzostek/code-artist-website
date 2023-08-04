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
              Techies, <span>Coffee Addicts</span>
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
              We have the master coder, whose fingers dance over the keyboard as
              they craft elegant lines of code with precision and skill. They
              approach every problem with the heart of an artist and the mind of
              a scientist, and their code is a symphony of logic and creativity.
              Then there's the visionary, whose imagination knows no bounds.
              They constantly push the boundaries of what's possible, dreaming
              up new features and applications that inspire us all to think
              bigger and bolder.
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
              There's the coding machine who always seems to be in the zone.
              They have a look of intense concentration on their face that can
              scare even the bravest of souls. We're pretty sure they haven't
              blinked in hours, and we wouldn't be surprised if they could code
              in their sleep. We also have the perfectionist, whose keen eye for
              detail ensures that every aspect of our software is flawless. They
              pore over every pixel, every line of code, every user interaction,
              until everything is just right.
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
              Then there's the idea generator who always has a new, wild concept
              for a feature. From a virtual reality version of our software to
              an AI assistant that tells jokes, they keep us on our toes. We're
              not always sure if they're serious or just messing with us, but
              either way, we love their enthusiasm. And let's not forget about
              the quality assurance guru who takes their job a little too
              seriously. They once spent an entire day testing a single button
              on a webpage, making sure it worked perfectly in every possible
              scenario. We admire their dedication, but we sometimes have to
              remind them that there are other tasks that need their attention.
              And let's not forget the silent observer, who takes it all in from
              the sidelines. They're always watching, always learning, always
              ready to contribute in their own unique way. Their insights and
              ideas often come out of nowhere, but when they do, they're always
              worth listening to.
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
              Lastly, there's the elusive ghost employee who always seems to be
              working, but we never see them. They fix bugs and add new
              features, but we can't seem to catch them in the act. We're pretty
              sure they're either a time-traveler or a ninja, but we'll never
              know for sure.
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
              All in all, the people at our software company are a quirky,
              creative, and brilliant bunch. We wouldn't be where we are without
              them, and we love them all, even if they're a little strange
              sometimes. Together, these individuals form a tapestry of skill
              and creativity, working in harmony to create software that's more
              than just a tool, but a work of art in its own right.
            </p>
          </div>
        </div>
        <h2 className="text-center">
          We are a wacky and quirky bunch of <span>caffeine-fueled</span>
          coders, <span>creative geniuses</span>, testing perfectionists, and
          mysterious ghosts who somehow manage to work together to produce{" "}
          <span>top-notch software. </span>
        </h2>
      </div>
    </SectionColored>
  );
};

export default AboutUs;
