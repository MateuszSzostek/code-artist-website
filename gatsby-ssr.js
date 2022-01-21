import React from "react";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./src/MyTheme.ts";
import GlobalStyles from "./src/GlobalStyles";
import { Provider } from "react-redux";
import store from "./src/store";

export const wrapRootElement = ({ element }) => (
    <Provider store={store}>
        <GlobalStyles />
        <ThemeProvider theme={myTheme}>{element}</ThemeProvider>
    </Provider>
);
