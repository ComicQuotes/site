import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";

import Theme from "../helpers/theme";

import quote from "../api/quotes";
import keys from "../keys";

const useStyles = makeStyles(Theme);

export default function MyCard(props) {
  const [quotes, setQuotes] = useState([]);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      const response = await quote.get(`/api/${keys.API_KEY}/quote?num=30`);
      setData(response.data);
      setQuotes(response.data);
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
                console.log(e.target.value);
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
      <Container className={classes.cardGrid} style={{ width: "85vw" }}>
        <Grid container spacing={4}>
          {quotes.map((quote) => (
            <Grid item key={quote._id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    color="textPrimary"
                  >
                    <Box fontWeight={600} fontSize={18}>
                      {quote.quote}
                    </Box>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    color="textSecondary"
                  >
                    <Box fontWeight={600} fontSize={15}>
                      - {quote.author}
                    </Box>
                  </Typography>
                  <Typography
                    gutterBottom
                    align="center"
                    variant="h5"
                    component="h2"
                    color="textSecondary"
                    style={{ marginLeft: "auto" }}
                  >
                    <Box fontWeight={600} fontSize={10}>
                      ID- {quote.quoteID}
                    </Box>
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
