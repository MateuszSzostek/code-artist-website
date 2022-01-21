import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import Navigation from "../Navigation";
import Footer from "../Footer";

const { Wrapper } = Styles;

const Layout = ({ children }: PropsWithChildren<{}>) => {
    return (
        <Wrapper>
            <Navigation />
            {children}
            <Footer />
        </Wrapper>
    );
};

export default Layout;
