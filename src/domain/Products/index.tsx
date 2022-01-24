import React from "react";
import Styles, {
    styles_productsText,
    styles_productsTitleText,
    styles_containerProperties,
    styles_flexColProperties,
} from "./styles";
import { useStaticQuery, graphql } from "gatsby";
import H2 from "../../components/H2";
import P from "../../components/P";
import { useIntl } from "gatsby-plugin-react-intl";
import Container from "./../../components/Container";
import productCardsData from "../../data/page_data/productsCardsData";
import ProductCard from "../../components/ProductCard";
import FlexCol from "../../components/FlexCol";

const {} = Styles;

const Products = () => {
    const productData = useStaticQuery(graphql`
        query ProductsQuery {
            allFile(
                filter: {
                    name: { in: ["product-1", "product-2", "product-3"] }
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

    const intl = useIntl();
    const {
        allFile: { edges },
    } = productData;

    productCardsData.map((item, index) => {
        item.image = { ...edges[index] };
    });

    return (
        <Container {...styles_containerProperties}>
            <H2 {...styles_productsTitleText}>
                {intl.formatMessage({ id: "Products Title" })}
            </H2>
            <P {...styles_productsText}>
                {intl.formatMessage({ id: "Products Text" })}
            </P>
            <FlexCol {...styles_flexColProperties}>
                {productCardsData.map((card) => (
                    <ProductCard key={card.id} {...card} />
                ))}
            </FlexCol>
        </Container>
    );
};

export default Products;
