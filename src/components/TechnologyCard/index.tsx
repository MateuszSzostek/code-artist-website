import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import { ITechnologyCard } from "./types";

const { CardContainer } = Styles;

const StudyCaseCard = ({
    image,
    altAtribute,
}: PropsWithChildren<ITechnologyCard>) => {
    return (
        <CardContainer>
            <img src={image} alt={altAtribute} />
        </CardContainer>
    );
};

export default StudyCaseCard;
