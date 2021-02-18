import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import MyCard from "./components/Card";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Hero from "./components/Hero";

const theme = createMuiTheme({
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
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default function Album() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav />
        <Hero />
        <MyCard data={cards}></MyCard>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}
