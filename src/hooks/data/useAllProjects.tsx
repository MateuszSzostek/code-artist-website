import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useAllProjects = () => {
  const allProjects = useStaticQuery(graphql`
    query allProjectsQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }) {
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

  return allProjects;
};

export default useAllProjects;
