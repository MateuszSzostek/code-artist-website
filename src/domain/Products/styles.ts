import styled from "styled-components";
import { myTheme } from "../../MyTheme";
import { IP } from "../../components/P";
import { IH2 } from "../../components/H2/types";
import { IFlexCol } from "../../components/FlexCol/types";
import { IContainer } from "../../components/Container/types";

const {
    color: { black, white_1, gray },
    fontSize: { medium_1, huge_1 },
} = myTheme;

const Styles = {};

const styles_flexColProperties: IFlexCol = {};

const styles_productsText: IP = {
    paragraphStyles: {
        size: medium_1,
        color: white_1,
        center: true,
        width: "700px",
        verticalMargin: "2.5rem",
    },
};

const styles_productsTitleText: IH2 = {
    headerStyles: {
        size: huge_1,
        color: white_1,
        center: true,
        underline: true,
    },
};

const styles_containerProperties: IContainer = {
    containerProperties: {
        centerContent: true,
        verticalPadding: "1rem",
        backgroundColor: gray,
        fullWidth: true,
    },
};

export default Styles;
export {
    styles_productsText,
    styles_productsTitleText,
    styles_containerProperties,
    styles_flexColProperties,
};
