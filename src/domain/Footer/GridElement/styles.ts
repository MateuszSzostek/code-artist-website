import styled from "styled-components";
import IGridElement from "./types";

const Styles = {
    Element: styled.div<IGridElement>`
        grid-area: ${({ gridArea }) => gridArea};
    `,
};

export default Styles;
