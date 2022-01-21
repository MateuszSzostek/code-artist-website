import React from "react";
import { Helmet } from "react-helmet";
import IHead from "./types";

const Head = ({ title, keywords }: IHead) => {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Intresting {title}</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="keywords" content={keywords} />
                <script
                    async
                    defer
                    crossOrigin="anonymous"
                    src="https://connect.facebook.net/en_GB/all.js#xfbml=1&version=v12.0&appId=1379488558919733&autoLogAppEvents=1"
                    nonce="gEZK8AU7"
                ></script>
            </Helmet>
        </div>
    );
};

export default Head;
