import styled from "styled-components";
import { IFlexCol } from "./types";

const Styles = {
    FlexColContainer: styled.div<IFlexCol>`
        flex-direction: column;
        justify-content: flex-start;
    `,
};

export default Styles;
