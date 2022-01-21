import React from "react";
import Styles, { styles_landingText, styles_titleText } from "./styles";
import BackgroundImage from "../../components/BackgroundImage";
import useBackgroundImage from "./hooks/useBackgroundImage";
import H1 from "../../components/H1";
import P from "../../components/P";
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-react-intl";
import Container from "./../../components/Container";

const { Wrapper } = Styles;

const Landing = () => {
    const image = useBackgroundImage();
    const intl = useIntl();
    return (
        <Wrapper>
            <BackgroundImage
                gatsbyImageData={image}
                alt="Brand background image"
            />
            <Container containerProperties={{}}>
                <H1 {...styles_titleText}>
                    {intl.formatMessage({ id: "LandingTitle" })}
                </H1>
                <P {...styles_landingText}>
                    {intl.formatMessage({ id: "welcometext" })}
                </P>
            </Container>
        </Wrapper>
    );
};

export default Landing;
