import React from "react";
import Styles from "./styles";
import { styles_buttonProperties } from "./styles";
import NavLink from "../../components/NavLink";
import StoreLink from "../../components/StoreLink";
import Button from "../../components/Button";
import { navLinksData } from "./data";
import Logo from "../../components/Logo";
import MenuButton from "../../components/MenuButton";

const { Wrapper, NavLinks, Background } = Styles;

const Navigation = () => {
    return (
        <Wrapper>
            <Logo />
            <Background />
            <NavLinks>
                {navLinksData.map((item) => (
                    <NavLink key={item.id} slug={item.slug}>
                        {item.text}
                    </NavLink>
                ))}
                <Button {...styles_buttonProperties}>CONTACT</Button>
            </NavLinks>
            <MenuButton />
        </Wrapper>
    );
};

export default Navigation;
