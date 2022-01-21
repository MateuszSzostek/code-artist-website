import styled from "styled-components";
import { Link as Gatsbylink } from "gatsby";
import { myTheme } from "../../MyTheme";

const {
    color: { black, third },
    fontSize: { normal },
} = myTheme;

const Styles = {
    Link: styled(Gatsbylink)`
        color: ${black};
        font-size: ${normal};
        padding-right: 20px;
        text-decoration: none;
        text-decoration: none;
        transition: 0.3s;
        &:hover {
            cursor: pointer;
            color: ${third};
        }
    `,
};

export default Styles;
