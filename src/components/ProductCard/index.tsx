import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import { IProductCard } from "./types";
import H3 from "../H3";
import P from "../P";
import {
    styles_productCardText,
    styles_productCardTitleText,
    styles_cover,
    styles_flexColProperties,
    styles_tagStyles,
} from "./styles";
import { useIntl } from "gatsby-plugin-react-intl";
import FlexCol from "../FlexCol";
import FlexRow from "../FlexRow";
import Tag from "../Tag";
import Button from "../Button";
import Cover from "../Cover";

const { CardContainer, BackgroundImage, ProductImage, ProductCardGrid } =
    Styles;

const ProductCard = ({
    image: {
        node: {
            childImageSharp: { gatsbyImageData },
        },
    },
    title,
    description,
    tags,
}: PropsWithChildren<IProductCard>) => {
    const Intl = useIntl();

    console.log(tags);

    return (
        <CardContainer>
            <BackgroundImage image={gatsbyImageData} alt={title} />
            <Cover {...styles_cover} />
            <ProductCardGrid>
                <ProductImage image={gatsbyImageData} alt={title} />
                <FlexCol {...styles_flexColProperties}>
                    <H3 {...styles_productCardTitleText}>
                        {Intl.formatMessage({ id: title })}
                    </H3>
                    <FlexRow>
                        {tags.map((tag) => {
                            <Tag key={tag} {...styles_tagStyles}>
                                {Intl.formatMessage({ id: tag })}
                            </Tag>;
                        })}
                    </FlexRow>
                    <P {...styles_productCardText}>
                        {Intl.formatMessage({ id: description })}
                    </P>
                    <FlexRow>
                        <Button>
                            {Intl.formatMessage({ id: "Learn More" })}
                        </Button>
                        <Button>
                            {Intl.formatMessage({ id: "Visit Website" })}
                        </Button>
                    </FlexRow>
                </FlexCol>
            </ProductCardGrid>
        </CardContainer>
    );
};

export default ProductCard;
