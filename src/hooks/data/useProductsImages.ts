import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useProductsImages = () => {
  const productsImages = useStaticQuery(graphql`
    query productsImagesQuery {
      allFile(
        filter: { name: { in: ["product-1", "product-2", "product-3"] } }
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

  return { productsImages };
};

export default useProductsImages;
