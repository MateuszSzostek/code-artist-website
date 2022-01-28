import styled from "styled-components";
import { myTheme } from "../../MyTheme";
import { IP } from "../../components/P";
import { IH2 } from "../../components/H2/types";
import { IFlexCol } from "../../components/FlexCol/types";
import { IContainer } from "../../components/Container/types";
import { styles_cover } from "../../components/ProductCard/styles";

const {
    color: { white_1, gray },
    fontSize: { medium_1, huge_1 },
    breakPoints: { desktop },
} = myTheme;

const Styles = {
    FooterGrid: styled.div`
        display: grid;
        grid-template-columns: 0.5fr 0.5fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        gap: 0px 0px;
        grid-template-areas:
            "FollowUsArea FollowUsArea FollowUsArea SocialMediaArea"
            "ContactUsArea ContactUsArea ContactUsArea FreeArea"
            "ContactFormArea ContactFormArea ContactFormArea FreeArea"
            "UsefullLinksArea UsefullLinksArea UsefullLinksArea FreeArea";
        width: ${desktop};
        padding-left: 15px;
        padding-right: 15px;
    `,
    FooterWrapper: styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
};

const styles_flexColProperties: IFlexCol = {
    flexColProperties: {},
};

const styles_productsText: IP = {
    paragraphStyles: {
        size: medium_1,
        color: white_1,
        width: "700px",
        verticalMargin: "2.5rem",
    },
};

const styles_productsTitleText: IH2 = {
    headerStyles: {
        size: huge_1,
        color: white_1,
        underline: true,
    },
};

const styles_containerProperties: IContainer = {
    containerProperties: {
        verticalPadding: "1rem",
        backgroundColor: gray,
        fullWidth: true,
        centerContent: true,
    },
};

export default Styles;
export {
    styles_productsText,
    styles_productsTitleText,
    styles_containerProperties,
    styles_flexColProperties,
};
