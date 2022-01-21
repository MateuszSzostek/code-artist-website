import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import { INavLink } from "./types";

const { Link } = Styles;

const NavLink = ({ children, slug }: PropsWithChildren<INavLink>) => {
    return <Link to={slug}>{children}</Link>;
};

export default NavLink;
