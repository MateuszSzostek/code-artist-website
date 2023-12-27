import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useCaseStudyImages = () => {
  const caseStudyImages = useStaticQuery(graphql`
    query caseStudyImagesQuery {
      allFile(
        filter: {
          name: {
            in: [
              "1-case-study-1"
              "2-case-study-2"
              "3-case-study-3"
              "4-case-study-4"
              "5-case-study-5"
              "6-case-study-6"
              "7-4beauty-make-up-website"
              "8-streamline-transport-website"
            ]
          }
        }
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  return { caseStudyImages };
};

export default useCaseStudyImages;
