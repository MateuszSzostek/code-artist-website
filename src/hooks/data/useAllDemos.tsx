import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useAllDemos = () => {
  const allDemos = useStaticQuery(graphql`
    query allDemosQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "demo" } } }) {
        edges {
          node {
            frontmatter {
              timestamp
              title
              urlName
              description
              alternativeText
            }
            id
          }
        }
      }
    }
  `);

  return allDemos;
};

export default useAllDemos;
