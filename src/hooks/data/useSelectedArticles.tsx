import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useSelectedArticles = (articlesIds: string[]) => {
  const selectedArticles = useStaticQuery(graphql`
    query selectedArticlesQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            id: {
              in: [
                "wm478vt43t9mrtywtrw04c9m34v"
                "wm478vt43t9m04dsfc9m34v"
                "wm478vt43t9m04c9m34vadg"
              ]
            }
          }
        }
      ) {
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

  return selectedArticles;
};

export default useSelectedArticles;
