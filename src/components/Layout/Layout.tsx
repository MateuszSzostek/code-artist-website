import React, { PropsWithChildren } from "react";
import "./styles.css";
import Navigation from "../../modules/Navigation";
import Footer from "../../modules/Footer";

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="layout">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
