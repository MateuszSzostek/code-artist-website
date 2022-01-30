import styled from "styled-components";
import { myTheme } from "../../MyTheme";

const borderWidth = "0.2rem";

const {
    color: { defaultBrand, white_1, transparentDefaultBrand },
} = myTheme;

const Styles = {
    CardContainer: styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90px;
        height: 90px;
        &:hover {
            cursor: pointer;
            & > div {
                background-color: ${defaultBrand};
            }
        }
    `,
    CardBackground: styled.div`
        position: absolute;
        width: 60%;
        height: 60%;
        transform: rotateZ(45deg);
        border-right: ${borderWidth} solid ${defaultBrand};
        border-bottom: ${borderWidth} solid ${defaultBrand};
        border-top: ${borderWidth} solid ${white_1};
        border-left: ${borderWidth} solid ${white_1};
        background-color: ${transparentDefaultBrand};
        transition: 0.3s;
    `,
    TechnologyImage: styled.img`
        position: absolute;
        width: 40%;
        height: 40%;
        z-index: 50;
    `,
};

export default Styles;
