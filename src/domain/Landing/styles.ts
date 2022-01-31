import styled from "styled-components";
import { myTheme } from "../../MyTheme";
import { IP } from "../../components/P";
import { IH1 } from "../../components/H1/types";
import { IButton } from "../../components/Button/types";

const {
    color: { white_1 },
    fontSize: { medium_1, huge_2 },
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
        verticalMargin: "0",
    },
};

const styles_titleText: IH1 = {
    headerStyles: {
        size: huge_2,
        color: white_1,
        verticalMargin: "1.5rem",
    },
};

const styles_buttonProperties: IButton = {
    buttonProperties: {
        margin: "2rem 0 0 0",
    },
};

export default Styles;
export { styles_landingText, styles_titleText, styles_buttonProperties };
