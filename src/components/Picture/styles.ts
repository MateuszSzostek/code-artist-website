import styled from "styled-components";
import { IImageWrapper } from "./types";
import { GatsbyImage } from "gatsby-plugin-image";

const Styles = {
    ImageWrapper: styled.div<IImageWrapper>`
        border: 6px solid ${({ color }) => color};
        margin: 6px;
        grid-area: ${({ gridArea }) => gridArea};
    `,
    Image: styled(GatsbyImage)``,
};

export default Styles;
