import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useAllArticles = () => {
  const allArticles = useStaticQuery(graphql`
    query allArticlesQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "article" } } }) {
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

  return allArticles;
};

export default useAllArticles;
