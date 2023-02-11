import React from "react";
import "./src/assets/styles/global.css";
import "./src/assets/styles/theme.css";

import "prismjs/themes/prism-tomorrow.css";

export const wrapRootElement = ({ element }) => (
  <>
    <div id="fb-root"></div>
    <div id="fb-customer-chat" className="fb-customerchat"></div>
    {element}
  </>
);
