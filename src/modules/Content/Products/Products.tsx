import React from "react";
import "./styles.css";

import SectionColored from "../../../components/Section/Colored/SectionColored";
import useProductsImages from "../../../hooks/data/useProductsImages";
import CardCodeArtistProduct from "../../../components/Card/Product/ProductCard";

import { productsCards } from "../../../content";
import { IContentCard } from "../../../types/components";

const Products = () => {
  const { productsImages } = useProductsImages();

  console.log(productsImages);

  return (
    <SectionColored background="#000000">
      <div className="products__container flex flex-column flex-center">
        <h2>
          Our <span>Products</span>
        </h2>
        <p className="w-max-820">
          Cras dictum blandit ante, sed consectetur ante laoreet id. Maecenas
          blandit ex ac lacus suscipit faucibus. Donec convallis fermentum
          augue. Praesent varius massa non massa porttitor pellentesque. Nunc mi
          nunc,{" "}
        </p>
        <div className="products__grid">
          {productsCards.map((card: IContentCard) => (
            <CardCodeArtistProduct
              key={card.id}
              {...card}
              image={
                productsImages.allFile.edges[(card.id - 1) as number].node
                  ?.childImageSharp?.gatsbyImageData
              }
            />
          ))}
        </div>
      </div>
    </SectionColored>
  );
};

export default Products;
