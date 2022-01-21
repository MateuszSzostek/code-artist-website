import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import { IServiceCard } from "./types";
import H3 from "../H3";
import P from "../P";
import { styles_serviceCardText, styles_serviceCardTitleText } from "./styles";
import { useIntl } from "gatsby-plugin-react-intl";

const { CardContainer } = Styles;

const ServiceCard = ({
    image,
    title,
    description,
}: PropsWithChildren<IServiceCard>) => {
    const Intl = useIntl();
    return (
        <CardContainer>
            <img src={image} alt={title} />
            <H3 {...styles_serviceCardTitleText}>
                {Intl.formatMessage({ id: title })}
            </H3>
            <P {...styles_serviceCardText}>
                {Intl.formatMessage({ id: description })}
            </P>
        </CardContainer>
    );
};

export default ServiceCard;
