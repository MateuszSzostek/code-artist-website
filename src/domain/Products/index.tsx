import React from "react";
import Styles, {
    styles_productsText,
    styles_productsTitleText,
    styles_containerProperties,
    styles_flexColProperties,
} from "./styles";
import H2 from "../../components/H2";
import P from "../../components/P";
import { useIntl } from "gatsby-plugin-react-intl";
import Container from "./../../components/Container";

import FlexCol from "../../components/FlexCol";

const {} = Styles;

const Products = () => {
    const intl = useIntl();
    return (
        <Container {...styles_containerProperties}>
            <H2 {...styles_productsTitleText}>
                {intl.formatMessage({ id: "Products Title" })}
            </H2>
            <P {...styles_productsText}>
                {intl.formatMessage({ id: "Products Text" })}
            </P>
            <FlexCol {...styles_flexColProperties}></FlexCol>
        </Container>
    );
};

export default Products;
