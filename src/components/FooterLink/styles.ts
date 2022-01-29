import styled from "styled-components";
import { myTheme } from "../../MyTheme";

const {
    color: { defaultBrand },
    fontSize: { medium_1 },
} = myTheme;

const Styles = {
    Link: styled.a`
        font-size: ${medium_1};
        color: ${defaultBrand};
        text-decoration: none;
        margin: 3px 0 3px 0;
    `,
};

export default Styles;
