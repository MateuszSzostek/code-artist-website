import React, { useContext } from "react";
import Styles, {
    styles_caseStudiesText,
    styles_caseStudiesTitle,
    styles_gridProperties,
    styles_containerProperties,
} from "./styles";
import H2 from "../../components/H2";
import P from "../../components/P";
import { useIntl } from "gatsby-plugin-react-intl";
import Container from "./../../components/Container";
import Grid from "../../components/Grid";
import caseStudiesCardsData from "../../data/page_data/caseStudiesData";
import StudyCaseCard from "../../components/StudyCaseCard";
import { PageContext } from "../../pages";

const {} = Styles;

const CaseStudies = () => {
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
            <H2 {...styles_caseStudiesTitle}>
                {intl.formatMessage({ id: "Case Studies Title" })}
            </H2>
            <P {...styles_caseStudiesText}>
                {intl.formatMessage({ id: "Case Studies Text" })}
            </P>
            <Grid {...styles_gridProperties}>
                {caseStudiesCardsData.map((card) => (
                    <StudyCaseCard key={card.id} {...card} />
                ))}
            </Grid>
        </Container>
    );
};

export default CaseStudies;
