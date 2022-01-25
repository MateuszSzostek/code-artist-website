import styled from "styled-components";
import IFlexRow from "./types";

const Styles = {
    FlexRowContainer: styled.div<IFlexRow>`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: ${({ flexRowProperties: { center } }) =>
            center !== null && center === true ? "center" : "flex-start"};
        position: ${({ flexRowProperties: { position } }) =>
            position !== null && position};
        bottom: ${({ flexRowProperties: { bottom } }) =>
            bottom !== null && bottom};
    `,
};

export default Styles;
