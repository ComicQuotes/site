import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";

const muiTheme = {
  palette: {
    primary: {
      main: red[700],
    },
    text: {
      primary: grey[800],
      secondary: grey[500],
    },
    secondary: {
      main: red[500],
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      '"Segoe UI"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
};

export default muiTheme;
