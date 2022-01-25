import React, { useContext } from "react";
import Styles, {
    styles_aboutUsText,
    styles_aboutUsTitle,
    styles_gridProperties,
    styles_containerProperties,
} from "./styles";
import H2 from "../../components/H2";
import P from "../../components/P";
import { useIntl } from "gatsby-plugin-react-intl";
import Container from "./../../components/Container";
import Grid from "../../components/Grid";
import caseStudiesCardsData from "../../data/page_data/caseStudiesData";
import { PageContext } from "../../pages";
import {
    aboutUsTextsData,
    aboutUsPicturesData,
} from "../../data/page_data/aboutUsData";

const { AboutUsGrid, AboutUsPicture, AboutUsText, AboutUsTitle } = Styles;

const AboutUs = () => {
    const intl = useIntl();
    const {
        pageData: {
            caseStudyData: { edges },
        },
    } = useContext(PageContext);

    caseStudiesCardsData.map((item, index) => {
        item.image = { ...edges[index] };
    });

    return (
        <Container {...styles_containerProperties}>
            <H2 {...styles_aboutUsTitle}>
                {intl.formatMessage({ id: "About Us Title" })}
            </H2>
            <P {...styles_aboutUsText}>
                {intl.formatMessage({ id: "About Us Text" })}
            </P>
            <AboutUsGrid>
                <AboutUsTitle>
                    {intl.formatMessage({ id: "About Us Subtitle" })}
                </AboutUsTitle>
                {aboutUsTextsData.map((text) => (
                    <AboutUsText key={text.id} {...text}>
                        {intl.formatMessage({ id: text.id })}
                    </AboutUsText>
                ))}
                {aboutUsPicturesData.map((picture) => (
                    <AboutUsPicture
                        key={picture.id}
                        image={picture.image}
                        id={picture.id}
                        gridName={picture.gridName}
                        alt=""
                    />
                ))}
            </AboutUsGrid>
        </Container>
    );
};

export default AboutUs;
