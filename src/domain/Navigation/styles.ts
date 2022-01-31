import styled from "styled-components";
import { IButton } from "../../components/Button/types";
import { myTheme } from "../../MyTheme";

const {
    breakPoints: { desktop },
    color: { transparentDarkGray },
} = myTheme;

const navHeight = "128px";

const Styles = {
    Wrapper: styled.div`
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: ${desktop};
        height: ${navHeight};
        z-index: 500;
        padding-right: 15px;
        @media only screen and (max-width: ${desktop}) {
            max-width: 100%;
        }
    `,
    Background: styled.div`
        position: absolute;
        left: calc(((100vw - ${desktop}) / 2) * (-1));
        width: 100vw;
        background-color: ${transparentDarkGray};
        z-index: 490;
        height: ${navHeight};
        @media only screen and (max-width: ${desktop}) {
            left: 0;
        }
    `,
    NavLinks: styled.div`
        display: flex;
        align-items: center;
        height: 100%;
        z-index: 500;
        @media only screen and (max-width: 880px) {
            display: none;
        }
    `,
};

const styles_buttonProperties: IButton = {
    buttonProperties: {},
};

export default Styles;
export { styles_buttonProperties };
