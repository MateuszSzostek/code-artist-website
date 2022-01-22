import React from "react";
import Styles, {
    styles_technologiesText,
    styles_technologiesTitleText,
    styles_containerProperties,
    styles_gridProperties,
    styles_technologiesSubtitle,
    styles_technologiesSubText,
} from "./styles";
import H2 from "../../components/H2";
import H3 from "../../components/H3";
import P from "../../components/P";
import { useIntl } from "gatsby-plugin-react-intl";
import Container from "./../../components/Container";
import Grid from "../../components/Grid";
import FlexCol from "../../components/FlexCol";
import FlexRow from "../../components/FlexRow";
import Button from "../../components/Button";
import TechnologyCard from "../../components/TechnologyCard";
import technologyCardsData from "../../data/page_data/technologyCards";

const Technologies = () => {
    const intl = useIntl();
    return (
        <Container {...styles_containerProperties}>
            <H2 {...styles_technologiesTitleText}>
                {intl.formatMessage({ id: "Technologies Title" })}
            </H2>
            <P {...styles_technologiesText}>
                {intl.formatMessage({ id: "Technologies Text" })}
            </P>
            <FlexRow>
                {technologyCardsData.map((card) => (
                    <TechnologyCard key={card.id} {...card} />
                ))}
            </FlexRow>
        </Container>
    );
};

export default Technologies;
