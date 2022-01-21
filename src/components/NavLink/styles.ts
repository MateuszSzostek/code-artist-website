import styled from "styled-components";
import { Link as Gatsbylink } from "gatsby";
import { myTheme } from "../../MyTheme";

const {
    color: { white_1, defaultBrand },
    fontSize: { medium_1 },
    fontWeight: { bold },
} = myTheme;

const Styles = {
    Link: styled(Gatsbylink)`
        position: relative;
        color: ${white_1};
        font-size: ${medium_1};
        font-weight: ${bold};
        padding-left: 15px;
        padding-right: 15px;
        text-decoration: none;
        transition: 0.3s;
        &:hover {
            cursor: pointer;
            color: ${defaultBrand};
        }
    `,
};

export default Styles;
