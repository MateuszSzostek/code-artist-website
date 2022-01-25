import styled from "styled-components";
import { myTheme } from "../../MyTheme";
import { IP } from "../../components/P";
import { IH2 } from "../../components/H2/types";
import { IContainer } from "../../components/Container/types";
import { IGrid } from "../../components/Grid/types";
import { IH3 } from "../../components/H3/types";
import IFlexRow from "../../components/FlexRow/types";

const {
    color: { black },
    fontSize: { medium_1, huge_1, large_2 },
    gridType: { double },
} = myTheme;

const Styles = {};

const styles_technologiesText: IP = {
    paragraphStyles: {
        size: medium_1,
        color: black,
        center: true,
        width: "700px",
        verticalMargin: "2.5rem",
    },
};
const styles_technologiesSubText: IP = {
    paragraphStyles: {
        size: medium_1,
        color: black,
        width: "700px",
        verticalMargin: "2.5rem",
    },
};

const styles_technologiesTitleText: IH2 = {
    headerStyles: {
        size: huge_1,
        color: black,
        center: true,
        underline: true,
    },
};

const styles_containerProperties: IContainer = {
    containerProperties: {
        centerContent: true,
        verticalPadding: "1rem",
    },
};

const styles_gridProperties: IGrid = {
    gridProperties: {
        gridType: double,
    },
};
const styles_technologiesSubtitle: IH3 = {
    headerStyles: {
        size: large_2,
        color: black,
        bold: true,
    },
};

const styles_flexRow: IFlexRow = {
    flexRowProperties: {
        center: true,
    },
};

export default Styles;
export {
    styles_technologiesText,
    styles_technologiesTitleText,
    styles_containerProperties,
    styles_gridProperties,
    styles_technologiesSubtitle,
    styles_technologiesSubText,
    styles_flexRow,
};
