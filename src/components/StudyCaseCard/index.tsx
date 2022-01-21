import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import { IStudyCaseCard } from "./types";
import H3 from "../H3";
import {
    styles_serviceCardTitleText,
    styles_tagStyles,
} from "./styles";
import { useIntl } from "gatsby-plugin-react-intl";
import Tag from "../Tag";

const { CardContainer, CaseStudyImage } = Styles;

const TechnologyCard = ({
    image: {
        node: {
            childImageSharp: { gatsbyImageData },
        },
    },
    title,
    tag,
}: PropsWithChildren<IStudyCaseCard>) => {
    console.log(gatsbyImageData);
    const Intl = useIntl();
    return (
        <CardContainer>
            <CaseStudyImage image={gatsbyImageData} alt="dsd sds ddd" />
            <H3 {...styles_serviceCardTitleText}>
                {Intl.formatMessage({ id: title })}
            </H3>
            <Tag {...styles_tagStyles}>{Intl.formatMessage({ id: tag })}</Tag>
        </CardContainer>
    );
};

export default TechnologyCard;
