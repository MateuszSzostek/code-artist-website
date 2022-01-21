import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import { IStoreLink } from "./types";

const { Link } = Styles;

const StoreLink = ({ children, slug }: PropsWithChildren<IStoreLink>) => {
    return <Link to={slug}>{children}</Link>;
};

export default StoreLink;
