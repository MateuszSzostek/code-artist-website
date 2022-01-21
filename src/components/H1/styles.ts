import styled from "styled-components";
import { IH1 } from "./types";

const Styles = {
    StyledH1: styled.h1<IH1>`
        font-size: ${({ headerStyles: { size } }) => size};
        color: ${({ headerStyles: { color } }) => color};
    `,
};

export default Styles;
