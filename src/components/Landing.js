import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import Cards from "./Cards";

import Theme from "../helpers/theme";

import quote from "../api/quotes";
import keys from "../keys";

const useStyles = makeStyles(Theme);

export default function MyCard(props) {
  const [quotes, setQuotes] = useState([]);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showLoader, setShowLoader] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      const response = await quote.get(`/api/${keys.API_KEY}/quote?num=30`);
      setData(response.data);
      setQuotes(response.data);
      setShowLoader(false);
    })();
  }, []);

  useEffect(() => {
    const results = data.filter(
      (quote) =>
        quote.quote.toLowerCase().includes(searchTerm) ||
        quote.author.toLowerCase().includes(searchTerm)
    );
    setQuotes(results);
  }, [searchTerm]);

  return (
    <main>
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
              onChange={(e) => {
                e.preventDefault();
                setSearchTerm(e.target.value.toLowerCase());
              }}
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
      <Container
        className={classes.cardGrid}
        style={{ width: "85vw", minHeight: "50vh" }}
      >
        <Grid container spacing={4}>
          {(() => {
            if (showLoader) {
              return (
                <CircularProgress
                  color="secondary"
                  style={{ marginLeft: "calc(50% - 10px)" }}
                />
              );
            } else {
              return <Cards quotes={quotes} />;
            }
          })()}
        </Grid>
      </Container>
    </main>
  );
}
