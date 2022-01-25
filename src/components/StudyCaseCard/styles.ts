import styled from "styled-components";
import { myTheme } from "../../MyTheme";
import { IH3 } from "../H3/types";
import { GatsbyImage } from "gatsby-plugin-image";
import { ICover } from "../Cover/types";
import { ITag } from "../Tag/types";

const {
    color: { white_1, transparentDarkGray },
    fontSize: { large_1 },
} = myTheme;

const Styles = {
    CardContainer: styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1 / 1;
        width: 100%;
        min-width: 100%;
        overflow: hidden;
    `,
    CaseStudyImage: styled(GatsbyImage)`
        position: absolute;
        min-width: 100%;
        min-height: 100%;
        max-height: 100%;

        transition: 0.4s;
        transform: scale3d(1, 1, 1) rotateZ(0deg);
        transition-timing-function: ease-in-out;

        &:hover {
            cursor: pointer;
            transition: 0.2s;
            transform: scale3d(1.2, 1.2, 1.2) rotateZ(10deg);
            transition-timing-function: ease-in-out;
        }
    `,
};

const styles_serviceCardTitleText: IH3 = {
    headerStyles: {
        size: large_1,
        color: white_1,
        center: true,
        bold: true,
        zIndex: "30",
    },
};
const styles_cover: ICover = {
    coverStyles: {
        color: transparentDarkGray,
        zIndex: "5",
    },
};
const styles_tagStyles: ITag = {
    tagStyles: {
        color: transparentDarkGray,
        zIndex: "10",
        bottom: "1.5rem",
        position: "absolute",
    },
};

export default Styles;
export { styles_serviceCardTitleText, styles_cover, styles_tagStyles };
