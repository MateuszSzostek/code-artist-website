import React from "react";
import Styles from "./styles";

const { Wrapper, LogoImg, LogoText } = Styles;

const Logo = () => {
    return (
        <Wrapper>
            <LogoImg />
            <LogoText>LOGO</LogoText>
        </Wrapper>
    );
};

export default Logo;
