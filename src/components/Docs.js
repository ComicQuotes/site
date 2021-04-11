import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Alert, AlertTitle } from "@material-ui/lab";

import { makeStyles } from "@material-ui/core/styles";

import Nav from "../partials/Nav";
import Footer from "../partials/Footer";
import muiTheme from "../helpers/muiTheme";

import Theme from "../helpers/theme";
import quote from "../api/quotes";

const useStyles = makeStyles(Theme);

const theme = createMuiTheme(muiTheme);

const Register = () => {
  //   const handleRequest = async (e) => {
  //     e.preventDefault();
  //     const { data } = await quote.post(`/register`, { email });
  //     setAlertMsg({ status: data.status, msg: data.msg });
  //     console.log(data);
  //     setAlert(true);
  //   };

  const classes = useStyles();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Nav />
          <Container style={{ maxWidth: "85vw", minHeight: "100vh" }}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              style={{ marginTop: "40px" }}
            >
              Comic Quotes
            </Typography>
            <Typography
              variant="h5"
              color="textPrimary"
              align="center"
              paragraph
              style={{ marginTop: "20px" }}
            >
              ComicQuotes API is a query based API.
            </Typography>
            <Typography
              variant="h5"
              color="textPrimary"
              align="center"
              paragraph
              style={{
                marginTop: "20px",
                padding: "10px 10px",
                border: "1px solid #49cc90",
                borderRadius: "5px",
                maxWidth: "max-content",
                backgroundColor: "#e8f6f0",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  marginRight: "10px",
                  padding: "5px 10px",
                  border: "1px solid #49cc90",
                  borderRadius: "5px",
                  maxWidth: "max-content",
                  backgroundColor: "#49cc90",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Base URL
              </div>
              <div>https://comicquotes.herokuapp.com/&lt;apikey&gt;</div>
            </Typography>
          </Container>
          <Footer />
        </CssBaseline>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Register;
