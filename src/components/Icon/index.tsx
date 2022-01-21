import React from "react";
import Styles from "./styles";
import { IIcon } from "./types";

const { Picture } = Styles;

const Icon = ({ width, height, image, alt, color }: IIcon) => {
    return (
        <Picture
            src={image}
            width={width}
            height={height}
            alt={alt}
            color={color}
        />
    );
};

export default Icon;
