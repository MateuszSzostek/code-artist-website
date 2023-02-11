import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useAllTips = () => {
  const allTips = useStaticQuery(graphql`
    query allTipsQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "tip" } } }) {
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

  return allTips;
};

export default useAllTips;
