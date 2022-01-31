import React, { PropsWithChildren, useEffect, useState } from "react";
import Styles from "./styles";
import Navigation from "../Navigation";
import Footer from "../Footer";
import useFacebookChat from "./useFacebookChat";

const { Wrapper } = Styles;

const Layout = ({ children }: PropsWithChildren<{}>) => {
    useFacebookChat();
    return (
        <Wrapper>
            <Navigation />
            {children}
            <Footer />
        </Wrapper>
    );
};

export default Layout;
