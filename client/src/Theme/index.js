import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

function Theme({ children }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

export default Theme;
