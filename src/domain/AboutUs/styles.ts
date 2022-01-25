import { myTheme } from "../../MyTheme";
import { IP } from "../../components/P";
import { IH2 } from "../../components/H2/types";
import { IGrid } from "../../components/Grid/types";
import { IContainer } from "../../components/Container/types";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { IAboutUsPicture, IAboutUsText } from "./types";

const {
    color: { black, white_1 },
    fontSize: { medium_1, huge_1 },
    gridType: { quadruple },
} = myTheme;

const Styles = {
    AboutUsGrid: styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
            "Title Picture1 Text1 Picture2"
            "Text2 Text3 Picture4 Picture4"
            "Picture3 Text3 Picture4 Picture4"
            "Text4 Picture5 Picture5 Text5";
    `,
    AboutUsPicture: styled(GatsbyImage)<IAboutUsPicture>`
        grid-area: ${({ gridName }) => gridName};
    `,
    AboutUsText: styled.p<IAboutUsText>`
        grid-area: ${({ gridName }) => gridName};
    `,
    AboutUsTitle: styled.h3`
        grid-area: "Title";
    `,
};

const styles_aboutUsText: IP = {
    paragraphStyles: {
        size: medium_1,
        color: black,
        center: true,
        width: "700px",
        verticalMargin: "2.5rem",
    },
};

const styles_aboutUsTitle: IH2 = {
    headerStyles: {
        size: huge_1,
        color: black,
        center: true,
        underline: true,
    },
};

const styles_gridProperties: IGrid = {
    gridProperties: {
        position: "relative",
        gridType: quadruple,
    },
};

const styles_containerProperties: IContainer = {
    containerProperties: {
        centerContent: true,
        verticalPadding: "1rem",
        fullWidth: true,
    },
};

export default Styles;
export {
    styles_aboutUsText,
    styles_aboutUsTitle,
    styles_gridProperties,
    styles_containerProperties,
};
