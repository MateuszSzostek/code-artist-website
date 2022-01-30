import React, { PropsWithChildren, useEffect, useState } from "react";
import Styles from "./styles";
import Navigation from "../Navigation";
import Footer from "../Footer";

const { Wrapper } = Styles;

const Layout = ({ children }: PropsWithChildren<{}>) => {
    const [chatLoaded, setChatLoaded] = useState(false);
    useEffect(() => {
        const loadChat = () => {
            window.removeEventListener("scroll", loadChat);
            setChatLoaded(true);
            var chatbox = document.getElementById("fb-customer-chat");
            chatbox.setAttribute("page_id", "103366008460353");
            chatbox.setAttribute("attribution", "biz_inbox");

            window.fbAsyncInit = function () {
                FB.init({
                    xfbml: true,
                    version: "v11.0",
                });
            };

            (function (d, s, id) {
                var js,
                    fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src =
                    "https://connect.facebook.net/pl_PL/sdk/xfbml.customerchat.js";
                fjs.parentNode.insertBefore(js, fjs);
            })(document, "script", "facebook-jssdk");
        };

        if (chatLoaded === false) {
            window.addEventListener("scroll", loadChat);
        }
    }, []);
    return (
        <Wrapper>
            <Navigation />
            {children}
            <Footer />
        </Wrapper>
    );
};

export default Layout;
