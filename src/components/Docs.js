import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

import Nav from "../partials/Nav";
import Footer from "../partials/Footer";
import muiTheme from "../helpers/muiTheme";
import APIBar from "./APIBar";
import Badge from "./Badge";

import Theme from "../helpers/theme";

const useStyles = makeStyles(Theme);

const theme = createMuiTheme(muiTheme);

const Register = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Nav />
          <Container
            style={{
              maxWidth: "85vw",
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              //   alignItems: "center",
              marginBottom: "500px",
            }}
          >
            <div>
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
            </div>
            <APIBar
              title="Base URL"
              url="https://comicquotes.herokuapp.com/<apiKey>"
              color="red"
            />
            <Typography
              variant="h5"
              color="textPrimary"
              paragraph
              style={{ marginTop: "20px" }}
            >
              API Endpoints
            </Typography>
            <APIBar
              title="GET"
              url="/quote/"
              desc="Delivers a random quote"
              color="green"
            />
            <APIBar
              title="GET"
              url="/quote/:id"
              desc="Delivers quote of quoteID=id"
              color="green"
            />
            <Typography
              variant="h5"
              color="textPrimary"
              paragraph
              style={{ marginTop: "20px" }}
            >
              Query Parameters
            </Typography>
            <APIBar
              title="QUERY"
              url="comic"
              desc="Searches for quotes of the comic requested"
              color="blue"
            />
            <APIBar
              title="QUERY"
              url="num"
              desc="Request for only a number of quotes"
              color="blue"
            />
            <Typography
              variant="h5"
              color="textPrimary"
              paragraph
              style={{ marginTop: "20px" }}
            >
              Available Comics
            </Typography>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Badge name="ironman" />
              <Badge name="spiderman" />
              <Badge name="batman" />
              <Badge name="greenarrow" />
            </div>
          </Container>
          <Footer />
        </CssBaseline>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Register;
