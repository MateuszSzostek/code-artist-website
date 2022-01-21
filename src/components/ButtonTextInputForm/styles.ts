import styled from "styled-components";

const Styles = {
    Wrapper: styled.div`
        position: relative;
        display: flex;
        flex-direction: row;
        & > button {
            position: absolute;
            left: calc(100% - 3px);
        }
    `,
};

export default Styles;
