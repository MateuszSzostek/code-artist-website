import styled from "styled-components";

const Styles = {
    Wrapper: styled.div`
        margin: 15px;
        display: none;
        align-items: center;
        text-align: center;
        border-radius: 10px;
        height: 55px;
        z-index: 500;
        @media (max-width: 880px) {
            display: flex;
        }
        &:hover {
            cursor: pointer;
        }
    `,
    BtnImg: styled.img`
        width: 48px;
        height: 48px;
        z-index: 500;
    `,
};

export default Styles;
