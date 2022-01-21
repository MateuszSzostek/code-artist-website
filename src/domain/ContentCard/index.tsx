import React from "react";
import Styles from "./styles";
import { IContentCard } from "./types";
import Picture from "../../components/Picture";
import useContentCard from "./hook";
import Options from "./Options";

const { Wrapper, TitleTop, TitleBottom, Pictures, Text, Source, Divider } =
    Styles;

const ContentCard = ({
    title,
    subtitle,
    text,
    pictures,
    category,
    layout,
    source,
    date,
}: IContentCard) => {
    const { frameColor, layoutType, numberOfPictures } = useContentCard(
        layout,
        pictures.length,
        category
    );

    return (
        <Wrapper imagesAmount={numberOfPictures}>
            <TitleTop category={category}>{title}</TitleTop>
            <Pictures layout={layoutType} imagesAmount={numberOfPictures}>
                {pictures.map((picture, idx) => (
                    <Picture
                        key={picture.id}
                        color={frameColor}
                        gatsbyImageData={
                            picture.childImageSharp.gatsbyImageData
                        }
                        alt={""}
                        gridArea={"grid-image-" + idx}
                    />
                ))}
            </Pictures>
            <Source href="#" target="blank">
                {source}
            </Source>
            <TitleBottom category={category}>{subtitle}</TitleBottom>
            <Text category={category}>{text}</Text>
            <Divider />
            <Options categoryIconColor={frameColor} />
            <Divider />
        </Wrapper>
    );
};

export default ContentCard;
