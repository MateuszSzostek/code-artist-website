import React from "react";
import Styles, {
    styles_servicesText,
    styles_servicesTitleText,
    styles_gridProperties,
    styles_containerProperties,
} from "./styles";
import H2 from "../../components/H2";
import P from "../../components/P";
import { useIntl } from "gatsby-plugin-react-intl";
import Container from "./../../components/Container";
import Grid from "../../components/Grid";
import servicesCardsData from "../../data/page_data/serviceCards";
import ServiceCard from "../../components/ServiceCard";

const {} = Styles;

const Services = () => {
    const intl = useIntl();
    return (
        <Container {...styles_containerProperties}>
            <H2 {...styles_servicesTitleText}>
                {intl.formatMessage({ id: "Services Title" })}
            </H2>
            <P {...styles_servicesText}>
                {intl.formatMessage({ id: "Services Text" })}
            </P>
            <Grid {...styles_gridProperties}>
                {servicesCardsData.map((card) => (
                    <ServiceCard key={card.id} {...card} />
                ))}
            </Grid>
        </Container>
    );
};

export default Services;
