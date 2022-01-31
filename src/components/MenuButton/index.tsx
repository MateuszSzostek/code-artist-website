import React from "react";
import Styles from "./styles";
import useMenuButton from "./useMenuButton";

const { Wrapper, BtnImg } = Styles;

const MenuButton = () => {
    const { menuIcon, toogleMenu } = useMenuButton();
    return (
        <Wrapper onClick={toogleMenu}>
            <BtnImg src={menuIcon} />
        </Wrapper>
    );
};

export default MenuButton;
