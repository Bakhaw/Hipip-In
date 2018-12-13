import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import palette from "./palette";

function Theme({ children }) {
  return <MuiThemeProvider theme={palette}>{children}</MuiThemeProvider>;
}

export default Theme;
