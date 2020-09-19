import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "##56555a",
      main: "#2C2B31",
      dark: "#1e1e22",
      contrastText: "#cfcfcf",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    text: {
      primary: "#ffffff",
      secondary: "#C4C4C4",
      disabled: "#212121",
    },
  },
});
