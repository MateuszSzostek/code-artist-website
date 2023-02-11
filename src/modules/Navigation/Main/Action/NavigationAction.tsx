import React, { useState } from "react";
import "./styles.css";
import "../styles.css";

import Icon from "../../../../components/Icon";
import Button from "../../../../components/Button";
import MainLinks from "../MainLinks";
import AppearanceButton from "../../../../components/Appearance/CodeArtistButton/ButtonAppeatance";

import { companyName } from "../../../../content";

import Burger from "../../../../components/Burger";
import MobileNavigation from "../../Mobile";
import Logo from "../../../../components/Logo";

const NavigationAction = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState<boolean>(false);

  const burgerButtonHandler = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  return (
    <nav className="nav__container flex flex-space-between absolute">
      <header className="flex flex-center">
        <Logo />
        <h1 className="logo-title">{companyName}</h1>
      </header>
      <div className="nav__links-container">
        <MainLinks />
        <Button>
          <AppearanceButton>Action</AppearanceButton>
        </Button>
      </div>
      <div className="nav__burger">
        <Button onClick={burgerButtonHandler}>
          <Burger opened={mobileMenuActive} />
        </Button>
        <MobileNavigation opened={mobileMenuActive} />
      </div>
    </nav>
  );
};

export default NavigationAction;
