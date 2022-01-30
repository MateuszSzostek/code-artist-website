import styled from "styled-components";
import { myTheme } from "../../MyTheme";
import { IP } from "../../components/P";
import { IH2 } from "../../components/H2/types";
import { IGrid } from "../../components/Grid/types";
import { IContainer } from "../../components/Container/types";

const {
    color: { black },
    fontSize: { medium_1, huge_1 },
    gridType: { quadruple },
} = myTheme;

const Styles = {};

const styles_servicesText: IP = {
    paragraphStyles: {
        size: medium_1,
        color: black,
        center: true,
        width: "700px",
        verticalMargin: "2.5rem",
    },
};

const styles_servicesTitleText: IH2 = {
    headerStyles: {
        size: huge_1,
        color: black,
        center: true,
        underline: true,
    },
};

const styles_gridProperties: IGrid = {
    gridProperties: {
        gap: "3rem",
        gridType: quadruple,
        margin: "3rem 0 5rem 0",
    },
};

const styles_containerProperties: IContainer = {
    containerProperties: {
        centerContent: true,
        verticalPadding: "1rem",
    },
};

export default Styles;
export {
    styles_servicesText,
    styles_servicesTitleText,
    styles_gridProperties,
    styles_containerProperties,
};
