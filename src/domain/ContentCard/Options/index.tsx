import React from "react";
import Styles from "./styles";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import Icons from "../../../assets/icons";
import { IOptions } from "./types";

const { politics } = Icons;

const { Wrapper } = Styles;

const Options = ({ categoryIconColor }: IOptions) => {
    return (
        <Wrapper>
            <Icon
                width={"42px"}
                height={"42px"}
                alt={"category"}
                image={politics}
                color={categoryIconColor}
            />
            <Button buttonType={"facebook"}>Facebook</Button>
        </Wrapper>
    );
};

export default Options;
