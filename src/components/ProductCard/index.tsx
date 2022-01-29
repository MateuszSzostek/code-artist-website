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
    styles_flexRowTags,
    styles_flexRowButtons,
    styles_buttonProperties,
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
                    <FlexRow {...styles_flexRowTags}>
                        {tags.map(({ name }) => (
                            <Tag key={name} {...styles_tagStyles}>
                                {Intl.formatMessage({ id: name })}
                            </Tag>
                        ))}
                    </FlexRow>
                    <P {...styles_productCardText}>
                        {Intl.formatMessage({ id: description })}
                    </P>
                    <FlexRow {...styles_flexRowButtons}>
                        <Button {...styles_buttonProperties}>
                            {Intl.formatMessage({ id: "Learn More" })}
                        </Button>
                        <Button {...styles_buttonProperties}>
                            {Intl.formatMessage({ id: "Visit Website" })}
                        </Button>
                    </FlexRow>
                </FlexCol>
            </ProductCardGrid>
        </CardContainer>
    );
};

export default ProductCard;
