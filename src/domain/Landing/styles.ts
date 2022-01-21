import styled from "styled-components";
import { myTheme } from "../../MyTheme";
import { IP } from "../../components/P";
import { IH1 } from "../../components/H1/types";

const {
    color: { white_1 },
    fontSize: { medium_1, huge_2 },
    breakPoints: { desktop },
} = myTheme;

const Styles = {
    Wrapper: styled.div`
        position: relative;
        width: 100%;
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
};

const styles_landingText: IP = {
    paragraphStyles: {
        size: medium_1,
        color: white_1,
    },
};

const styles_titleText: IH1 = {
    headerStyles: {
        size: huge_2,
        color: white_1,
    },
};

export default Styles;
export { styles_landingText, styles_titleText };
