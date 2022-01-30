import React from "react";
import Styles, {
    styles_footerText,
    styles_footerTitleText,
    styles_containerProperties,
    styles_flexColProperties,
    styles_gridProperties,
    styles_nameFieldProperties,
    styles_emailFieldProperties,
    styles_phoneFieldProperties,
    styles_TextareaFieldProperties,
    styles_buttonProperties,
    styles_footerLinkGridProperties,
    styles_footerLinksTitle,
    styles_flexRowSocialIcons,
} from "./styles";
import H2 from "../../components/H2";
import P from "../../components/P";
import { useIntl } from "gatsby-plugin-react-intl";
import Container from "./../../components/Container";
import FlexCol from "../../components/FlexCol";
import GridElement from "./GridElement";
import Grid from "../../components/Grid";
import InputField from "../../components/InputField";
import Textarea from "../../components/Textarea";
import Button from "../../components/Button";
import footerLinksData from "../../data/page_data/footerLinksData";
import socialIconsData from "../../data/page_data/socialIconsData";
import FooterLink from "../../components/FooterLink";
import FlexRow from "../../components/FlexRow";
import SocialIcon from "../../components/SocialIcon";

const { FooterGrid, FooterWrapper } = Styles;

const Footer = () => {
    const intl = useIntl();
    return (
        <Container {...styles_containerProperties}>
            <footer>
                <FooterWrapper>
                    <FooterGrid>
                        <GridElement gridArea="FollowUsArea">
                            <H2 {...styles_footerTitleText}>
                                {intl.formatMessage({ id: "Follow Us Title" })}
                            </H2>
                            <P {...styles_footerText}>
                                {intl.formatMessage({ id: "Follow Us Text" })}
                            </P>
                        </GridElement>
                        <GridElement gridArea="ContactUsArea">
                            <H2 {...styles_footerTitleText}>
                                {intl.formatMessage({ id: "Contact Us Title" })}
                            </H2>
                            <P {...styles_footerText}>
                                {intl.formatMessage({ id: "Contact Us Text" })}
                            </P>
                        </GridElement>
                        <GridElement gridArea="ContactFormArea">
                            <form>
                                <Grid {...styles_gridProperties}>
                                    <FlexCol {...styles_flexColProperties}>
                                        <InputField
                                            {...styles_nameFieldProperties}
                                        />
                                        <InputField
                                            {...styles_emailFieldProperties}
                                        />
                                        <InputField
                                            {...styles_phoneFieldProperties}
                                        />
                                    </FlexCol>
                                    <Textarea
                                        {...styles_TextareaFieldProperties}
                                    />
                                </Grid>
                                <Button {...styles_buttonProperties}>
                                    {intl.formatMessage({ id: "Send Message" })}
                                </Button>
                            </form>
                        </GridElement>
                        <GridElement gridArea="UsefullLinksArea">
                            <H2 {...styles_footerLinksTitle}>
                                {intl.formatMessage({
                                    id: "Footer Links Title",
                                })}
                            </H2>
                            <Grid {...styles_footerLinkGridProperties}>
                                {footerLinksData.map(
                                    ({
                                        footerLinkProperties: { id, name },
                                        footerLinkProperties,
                                    }) => (
                                        <FooterLink
                                            key={id}
                                            footerLinkProperties={
                                                footerLinkProperties
                                            }
                                        >
                                            {name}
                                        </FooterLink>
                                    )
                                )}
                            </Grid>
                        </GridElement>
                        <GridElement gridArea="SocialMediaArea">
                            <FlexRow {...styles_flexRowSocialIcons}>
                                {socialIconsData.map(
                                    ({ id, image, altAtribute }) => (
                                        <SocialIcon
                                            key={id}
                                            altAtribute={altAtribute}
                                            image={image}
                                            id={id}
                                        />
                                    )
                                )}
                            </FlexRow>
                        </GridElement>
                        <GridElement gridArea="FreeArea"></GridElement>
                    </FooterGrid>
                </FooterWrapper>
                <FlexCol {...styles_flexColProperties}></FlexCol>
            </footer>
        </Container>
    );
};

export default Footer;
