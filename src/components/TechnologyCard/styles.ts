import styled from "styled-components";
import { myTheme } from "../../MyTheme";

const {} = myTheme;

const Styles = {
    CardContainer: styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1 / 1;
        width: 100%;
        min-width: 100%;
        overflow: hidden;
    `,
};

export default Styles;
