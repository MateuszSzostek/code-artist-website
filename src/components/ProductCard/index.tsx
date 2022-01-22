import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import { IProductCard } from "./types";
import H3 from "../H3";
import P from "../P";
import { styles_productCardText, styles_productCardTitleText } from "./styles";
import { useIntl } from "gatsby-plugin-react-intl";

const { CardContainer, BackgroundImage, ProductImage } = Styles;

const ProductCard = ({
    image,
    title,
    description,
}: PropsWithChildren<IProductCard>) => {
    const Intl = useIntl();
    return (
        <CardContainer>
            <BackgroundImage image={} />
            <img src={image} alt={title} />
            <H3 {...styles_productCardTitleText}>
                {Intl.formatMessage({ id: title })}
            </H3>
            <P {...styles_productCardText}>
                {Intl.formatMessage({ id: description })}
            </P>
        </CardContainer>
    );
};

export default ProductCard;
