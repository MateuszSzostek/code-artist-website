import styled from "styled-components";
import { IField } from "./types";
import { myTheme } from "../../MyTheme";

const {
    color: { gray, black },
    fontSize: { normal },
} = myTheme;

const Styles = {
    Wrapper: styled.div`
        display: flex;
        flex-direction: column;
    `,
    Label: styled.label`
        color: ${black};
        font-size: ${normal};
    `,
    Field: styled.input<IField>`
        padding-left: 15px;
        padding-right: 15px;
        height: 40px;
        border: 1px ${gray} solid;
        border-radius: 3px;
        width: ${({ width }) => width};
        color: ${black};
    `,
};

export default Styles;
