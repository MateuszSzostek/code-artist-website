import { myTheme } from "../../MyTheme";
import { IP } from "../../components/P";
import { IH2 } from "../../components/H2/types";
import { IGrid } from "../../components/Grid/types";
import { IContainer } from "../../components/Container/types";

const {
    color: { black, white_1 },
    fontSize: { medium_1, huge_1 },
    gridType: { quadruple },
} = myTheme;

const Styles = {};

const styles_caseStudiesText: IP = {
    paragraphStyles: {
        size: medium_1,
        color: white_1,
        center: true,
        width: "700px",
        verticalMargin: "2.5rem",
    },
};

const styles_caseStudiesTitle: IH2 = {
    headerStyles: {
        size: huge_1,
        color: white_1,
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
        backgroundColor: black,
        fullWidth: true,
    },
};

export default Styles;
export {
    styles_caseStudiesText,
    styles_caseStudiesTitle,
    styles_gridProperties,
    styles_containerProperties,
};
