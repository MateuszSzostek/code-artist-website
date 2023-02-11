import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useCaseStudyImages = () => {
  const caseStudyImages = useStaticQuery(graphql`
    query caseStudyImagesQuery {
      allFile(
        filter: {
          name: {
            in: [
              "case-study-1"
              "case-study-2"
              "case-study-3"
              "case-study-4"
              "case-study-5"
              "case-study-6"
              "case-study-7"
              "case-study-8"
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

  return { caseStudyImages };
};

export default useCaseStudyImages;
