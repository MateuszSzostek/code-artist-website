import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import { ISocialIcon } from "./types";

const { CardContainer, CardBackground, TechnologyImage } = Styles;

const SocialIcon = ({ image, altAtribute }: PropsWithChildren<ISocialIcon>) => {
    return (
        <CardContainer>
            <TechnologyImage src={image} alt={altAtribute} />
            <CardBackground />
        </CardContainer>
    );
};

export default SocialIcon;
