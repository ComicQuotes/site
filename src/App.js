import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Theme from "./helpers/theme";

import MyCard from "./components/Card";
import Copyright from "./components/Copyright";

const handleInput = (e) => {
  e.preventDefault();
  console.log(e.target.value);
};

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

const useStyles = makeStyles(Theme);

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <FormatQuoteIcon className={classes.icon} />
              <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
              >
                Comic Quotes
              </Typography>
              <Button color="inherit">API</Button>
              <Button color="inherit">Features</Button>
              <Button color="inherit">Donate</Button>
              <Button color="inherit">Github</Button>
            </Toolbar>
          </AppBar>
        </div>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container style={{ width: "85vw" }}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Comic Quotes
              </Typography>
              {/* <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Search quotes from your favorite comics
              </Typography> */}
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">
                  Search Quote
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">
                      <FormatQuoteIcon className={classes.icon} />
                    </InputAdornment>
                  }
                  onChange={handleInput}
                  labelWidth={95}
                />
              </FormControl>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Use it in your own app
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      API Documentation
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <MyCard data={cards}></MyCard>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Copyright />
        </footer>
        {/* End footer */}
      </ThemeProvider>
    </React.Fragment>
  );
}
