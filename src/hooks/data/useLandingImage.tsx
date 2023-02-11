import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useLandingImage = () => {
  const landingImage = useStaticQuery(graphql`
    query landingImageQuery {
      file(name: { eq: "landing-background" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  return { landingImage };
};

export default useLandingImage;
