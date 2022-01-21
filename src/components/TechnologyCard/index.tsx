import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import { ITechnologyCard } from "./types";

const { CardContainer, CardBackground, TechnologyImage } = Styles;

const TechnologyCard = ({
    image,
    altAtribute,
}: PropsWithChildren<ITechnologyCard>) => {
    return (
        <CardContainer>
            <TechnologyImage src={image} alt={altAtribute} />
            <CardBackground />
        </CardContainer>
    );
};

export default TechnologyCard;
