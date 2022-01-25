import styled from "styled-components";
import { myTheme } from "../../MyTheme";
import { IP } from "../P/types";
import { IH3 } from "../H3/types";
import { GatsbyImage } from "gatsby-plugin-image";
import { ICover } from "../Cover/types";
import { IFlexCol } from "../FlexCol/types";
import { ITag } from "../Tag/types";
import IFlexRow from "../FlexRow/types";

const {
    color: { transparentDefaultBrand, transparentDarkBlack, white_1 },
    fontSize: { medium_1, medium_3 },
    breakPoints: { desktop },
} = myTheme;

const Styles = {
    CardContainer: styled.div`
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 500px;
        margin-top: 2rem;
        margin-bottom: 2rem;
    `,
    ProductCardGrid: styled.div`
        display: grid;
        width: ${desktop};
        grid-template-columns: 35% auto;
        grid-template-areas: ". .";
        z-index: 15;
    `,
    BackgroundImage: styled(GatsbyImage)`
        left: 0;
        position: absolute;
        min-width: 100%;
        height: 500px;
    `,
    ProductImage: styled(GatsbyImage)`
        aspect-ratio: 1 / 1;
        height: 100%;
    `,
};

const styles_flexColProperties: IFlexCol = {
    flexColProperties: {
        margin: "15px 3rem 15px 3rem",
    },
};

const styles_cover: ICover = {
    coverStyles: {
        color: transparentDarkBlack,
        zIndex: "10",
    },
};

const styles_productCardText: IP = {
    paragraphStyles: {
        size: medium_1,
        color: white_1,
    },
};

const styles_productCardTitleText: IH3 = {
    headerStyles: {
        size: medium_3,
        color: white_1,
        bold: true,
    },
};

const styles_tagStyles: ITag = {
    tagStyles: {
        color: transparentDefaultBrand,
        zIndex: "20",
    },
};

const styles_flexRowTags: IFlexRow = {
    flexRowProperties: {
        center: false,
    },
};

const styles_flexRowButtons: IFlexRow = {
    flexRowProperties: {
        center: false,
        position: "absolute",
        bottom: "2rem",
    },
};

export default Styles;
export {
    styles_productCardText,
    styles_productCardTitleText,
    styles_cover,
    styles_flexColProperties,
    styles_tagStyles,
    styles_flexRowTags,
    styles_flexRowButtons,
};
