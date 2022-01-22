import styled from "styled-components";
import { myTheme } from "../../MyTheme";

const borderWidth = "0.2rem";

const {
    color: { defaultBrand, black },
} = myTheme;

const Styles = {
    CardContainer: styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 120px;
    `,
    CardBackground: styled.div`
        position: absolute;
        width: 60%;
        height: 60%;
        transform: rotateZ(45deg);
        border-right: ${borderWidth} solid ${defaultBrand};
        border-bottom: ${borderWidth} solid ${defaultBrand};
        border-top: ${borderWidth} solid ${black};
        border-left: ${borderWidth} solid ${black};
    `,
    TechnologyImage: styled.img`
        position: absolute;
        width: 30%;
        height: 30%;
    `,
};

export default Styles;
