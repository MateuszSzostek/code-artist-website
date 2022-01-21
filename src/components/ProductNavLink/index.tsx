import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import { IProductNavLink } from "./types";

const { Link } = Styles;

const ProductNavLink = ({
    children,
    slug,
}: PropsWithChildren<IProductNavLink>) => {
    return <Link to={slug}>{children}</Link>;
};

export default ProductNavLink;
