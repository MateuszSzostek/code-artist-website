import styled from "styled-components";
import { myTheme } from "../../MyTheme";

const {
    breakPoints: { desktop, tablet },
} = myTheme;

const Styles = {
    Wrapper: styled.div`
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: ${desktop};
        height: 128px;
        z-index: 50;
        @media only screen and (max-width: ${desktop}) {
            max-width: 100%;
        }
    `,
    NavLinks: styled.div`
        display: flex;
        align-items: center;
        height: 100%;
    `,
};

export default Styles;
