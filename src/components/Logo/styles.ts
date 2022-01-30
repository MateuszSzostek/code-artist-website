import styled from "styled-components";
import { myTheme } from "../../MyTheme";

const {
    color: { textDefault, gray },
    fontWeight: { bold },
} = myTheme;

const Styles = {
    Wrapper: styled.div`
        margin: 15px;
        display: flex;
        align-items: center;
        text-align: center;
        border-radius: 10px;
        height: 55px;
        z-index: 500;
    `,
    LogoImg: styled.div`
        width: 48px;
        height: 48px;
        background-color: gray;
        border-radius: 10px;
        z-index: 500;
    `,
    LogoText: styled.div`
        font-size: 2.66rem;
        font-weight: ${bold};
        color: ${textDefault};
        margin-left: 10px;
    `,
};

export default Styles;
