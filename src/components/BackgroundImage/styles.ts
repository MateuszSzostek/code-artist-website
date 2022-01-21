import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const Styles = {
    ImageWrapper: styled.div`
        position: absolute;
        min-width: 100%;
        height: 100%;
    `,
    Image: styled(GatsbyImage)``,
};

export default Styles;
