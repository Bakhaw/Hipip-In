import { createMuiTheme } from "@material-ui/core/styles";

// TODO apply all styles here so we can use them in material-ui components easily without
// TODO having to use css files
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff"
    },
    secondary: {
      main: "#AA90C5"
    }
  }
});

export default theme;
