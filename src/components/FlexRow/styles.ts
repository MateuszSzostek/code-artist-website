import styled from "styled-components";
import IFlexRow from "./types";

const Styles = {
    FlexRowContainer: styled.div<IFlexRow>`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    `,
};

export default Styles;
