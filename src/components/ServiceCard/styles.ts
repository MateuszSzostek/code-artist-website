import styled, { css } from "styled-components";
import { myTheme } from "../../MyTheme";
import { IP } from "../P/types";
import { IH3 } from "../H3/types";

import { btnColors } from "./helpers";

const borderWidth = "0.2rem";

const {
    color: { defaultBrand, black },
    fontSize: { medium_1, medium_3 },
    fontWeight: { bold },
} = myTheme;

const Styles = {
    CardContainer: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1.25rem;
        border-right: ${borderWidth} solid ${defaultBrand};
        border-bottom: ${borderWidth} solid ${defaultBrand};
        border-top: ${borderWidth} solid ${black};
        border-left: ${borderWidth} solid ${black};
    `,
};

const styles_serviceCardText: IP = {
    paragraphStyles: {
        size: medium_1,
        color: black,
        center: true,
    },
};

const styles_serviceCardTitleText: IH3 = {
    headerStyles: {
        size: medium_3,
        color: black,
        center: true,
        bold: true,
    },
};

export default Styles;
export { styles_serviceCardText, styles_serviceCardTitleText };
