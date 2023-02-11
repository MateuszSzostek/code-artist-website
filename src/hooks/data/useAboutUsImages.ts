import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useAboutUsImages = () => {
  const aboutUsImages = useStaticQuery(graphql`
    query aboutUsImagesQuery {
      allFile(
        filter: {
          name: {
            in: [
              "about-us-1"
              "about-us-2"
              "about-us-3"
              "about-us-4"
              "about-us-5"
            ]
          }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  return { aboutUsImages };
};

export default useAboutUsImages;
