import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { Global, ThemeProvider } from "@emotion/react";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
