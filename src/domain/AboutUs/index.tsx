import React from "react";
import Styles, {
    styles_aboutUsText,
    styles_aboutUsTitle,
    styles_containerProperties,
} from "./styles";
import H2 from "../../components/H2";
import P from "../../components/P";
import { useIntl } from "gatsby-plugin-react-intl";
import Container from "./../../components/Container";
import {
    aboutUsTextsData,
    aboutUsPicturesData,
} from "../../data/page_data/aboutUsData";
import { graphql, useStaticQuery } from "gatsby";

const { AboutUsGrid, AboutUsPicture, AboutUsText, AboutUsTitle } = Styles;

const AboutUs = () => {
    const intl = useIntl();

    const aboutUsData = useStaticQuery(graphql`
        query AboutUsQuery {
            allFile(
                filter: {
                    name: {
                        in: [
                            "about-us-1"
                            "about-us-2"
                            "about-us-3"
                            "about-us-4"
                            "about-us-5"
                        ]
                    }
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

    const {
        allFile: { edges },
    } = aboutUsData;

    aboutUsPicturesData.map((item, index) => {
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
                        {intl.formatMessage({ id: text.text })}
                    </AboutUsText>
                ))}
                {aboutUsPicturesData.map((picture) => (
                    <AboutUsPicture
                        key={picture.id}
                        image={
                            picture.image.node.childImageSharp.gatsbyImageData
                        }
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
