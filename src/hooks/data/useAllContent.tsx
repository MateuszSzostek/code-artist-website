import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useAllContent = () => {
  const allContent = useStaticQuery(graphql`
    query allContentQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              type
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

  return allContent;
};

export default useAllContent;
