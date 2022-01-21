import React from "react";
import { IBackgroundImage } from "./types";
import Styles from "./styles";

const { ImageWrapper, Image } = Styles;

const pictureStyles = {
    width: "100%",
    height: "100%",
};

const BackgroundImage = ({ gatsbyImageData, alt }: IBackgroundImage) => {
    return (
        <ImageWrapper>
            <Image
                image={gatsbyImageData}
                alt={alt}
                imgStyle={pictureStyles}
                style={pictureStyles}
            />
        </ImageWrapper>
    );
};

export default BackgroundImage;
