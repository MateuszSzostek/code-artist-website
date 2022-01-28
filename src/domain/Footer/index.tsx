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
import GridElement from "./GridElement";

const { FooterGrid, FooterWrapper } = Styles;

const Footer = () => {
    const intl = useIntl();
    return (
        <Container {...styles_containerProperties}>
            <footer>
                <FooterWrapper>
                    <FooterGrid>
                        <GridElement gridArea="FollowUsArea">
                            <H2 {...styles_productsTitleText}>
                                {intl.formatMessage({ id: "Follow Us Title" })}
                            </H2>
                            <P {...styles_productsText}>
                                {intl.formatMessage({ id: "Follow Us Text" })}
                            </P>
                        </GridElement>
                        <GridElement gridArea="ContactUsArea">
                            <H2 {...styles_productsTitleText}>
                                {intl.formatMessage({ id: "Contact Us Title" })}
                            </H2>
                            <P {...styles_productsText}>
                                {intl.formatMessage({ id: "Contact Us Text" })}
                            </P>
                        </GridElement>
                        <GridElement gridArea="ContactFormArea"></GridElement>
                        <GridElement gridArea="UsefullLinksArea"></GridElement>
                        <GridElement gridArea="SocialMediaArea"></GridElement>
                        <GridElement gridArea="FreeArea"></GridElement>
                    </FooterGrid>
                </FooterWrapper>
                <FlexCol {...styles_flexColProperties}></FlexCol>
            </footer>
        </Container>
    );
};

export default Footer;
