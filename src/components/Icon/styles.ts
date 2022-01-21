import styled from "styled-components";
import { IPicture } from "./types";

const Styles = {
    Picture: styled.img<IPicture>`
        width: ${({ width }) => width};
        height: ${({ height }) => height};
        background-color: ${({ color }) => color};
        padding: 3px;
        border-radius: 3px;
    `,
};

export default Styles;
