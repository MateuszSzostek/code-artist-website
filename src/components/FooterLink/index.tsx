import React, { PropsWithChildren } from "react";
import Styles from "./styles";
import { IFooterLink } from "./types";

const { Link } = Styles;
const FooterLink = ({
    children,
    footerLinkProperties: { slug },
}: PropsWithChildren<IFooterLink>) => {
    return <Link href={slug}>{children}</Link>;
};

export default FooterLink;
