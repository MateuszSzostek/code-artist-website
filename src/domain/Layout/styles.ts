import styled from "styled-components";
import { myTheme } from "../../MyTheme";

const {
    color: { gray },
} = myTheme;

const Styles = {
    Wrapper: styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        background: rgb(255, 255, 255);
        background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(199, 228, 255, 1) 100%
        );
    `,
};

export default Styles;
