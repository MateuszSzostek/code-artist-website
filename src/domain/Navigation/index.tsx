import React from "react";
import Styles from "./styles";
import ButtonTextInputForm from "../../components/ButtonTextInputForm";
import NavLink from "../../components/NavLink";
import StoreLink from "../../components/StoreLink";
import Button from "../../components/Button";
import { navLinksData } from "./data";
import Logo from "../../components/Logo";

const { Wrapper, NavLinks } = Styles;

const Navigation = () => {
    return (
        <Wrapper>
            <Logo />
            <NavLinks>
                {navLinksData.map((item) => (
                    <NavLink key={item.id} slug={item.slug}>
                        {item.text}
                    </NavLink>
                ))}
                <Button>CONTACT</Button>
            </NavLinks>
        </Wrapper>
    );
};

export default Navigation;
