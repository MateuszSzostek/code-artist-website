import styled from "styled-components";
import { myTheme } from "../../MyTheme";
import { IP } from "../P/types";
import { IH3 } from "../H3/types";
import { GatsbyImage } from "gatsby-plugin-image";

const borderWidth = "0.2rem";

const {
    color: { defaultBrand, black },
    fontSize: { medium_1, medium_3 },
} = myTheme;

const Styles = {
    CardContainer: styled.div`
        width: 100%;
    `,
    ProductCardGrid: styled.div`
        display: grid;
        width: 100%;
        grid-template-columns: 30% 70%;
        grid-template-areas: ". .";
    `,
    BackgroundImage: styled(GatsbyImage)``,
    ProductImage: styled(GatsbyImage)``,
};

const styles_productCardText: IP = {
    paragraphStyles: {
        size: medium_1,
        color: black,
        center: true,
    },
};

const styles_productCardTitleText: IH3 = {
    headerStyles: {
        size: medium_3,
        color: black,
        center: true,
        bold: true,
    },
};

export default Styles;
export { styles_productCardText, styles_productCardTitleText };
