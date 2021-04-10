import React from "react";
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

const useStyles = makeStyles(Theme);

const theme = createMuiTheme(muiTheme);

const Register = () => {
  const handleRequest = (e) => {
    e.preventDefault();
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Nav />
          <Container style={{ maxWidth: "60vw", minHeight: "100vh" }}>
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
              Register with your email address
            </Typography>
            <Container>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleRequest}
                >
                  Request API Key
                </Button>
              </form>

              <Alert severity="success" variant="outlined">
                <AlertTitle>Success</AlertTitle>
                Your API key has been mailed to you, please check your mail
              </Alert>
            </Container>
          </Container>
          <Footer />
        </CssBaseline>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Register;
