import React from "react";
import { IImageWrapper, IPicture } from "./types";
import Styles from "./styles";

const { ImageWrapper, Image } = Styles;

const pictureStyles = {
    width: "100%",
    height: "100%",
};

const Picture = ({ color, gatsbyImageData, alt, gridArea }: IPicture) => {
    return (
        <ImageWrapper color={color} gridArea={gridArea}>
            <Image
                image={gatsbyImageData}
                alt={alt}
                imgStyle={pictureStyles}
                style={pictureStyles}
            />
        </ImageWrapper>
    );
};

export default Picture;

// <Image image={} />
