import styled from "styled-components";
import { myTheme } from "../../MyTheme";

const {
    color: { white },
} = myTheme;

const Styles = {
    Wrapper: styled.div`
        background-color: white;
        margin: 15px;
        display: flex;
        flex-direction: column;
        box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        padding: 15px;
        height: 55px;
        width: 240px;
    `,
};

export default Styles;
