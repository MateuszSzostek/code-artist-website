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
import Button from "../../components/Button";

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
            <Grid {...styles_gridProperties}>
                <FlexCol>
                    <H3 {...styles_technologiesSubtitle}>
                        {" "}
                        {intl.formatMessage({ id: "Technologies Subtitle" })}
                    </H3>
                    <P {...styles_technologiesSubText}>
                        {intl.formatMessage({ id: "Technologies Subtext" })}
                    </P>
                    <Button>{intl.formatMessage({ id: "Lets Talk" })}</Button>
                </FlexCol>
                <FlexCol></FlexCol>
            </Grid>
        </Container>
    );
};

export default Technologies;
