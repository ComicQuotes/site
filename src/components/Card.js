import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Theme from "../helpers/theme";

import quote from "../api/quotes";
import keys from "../keys";

const useStyles = makeStyles(Theme);

export default function MyCard(props) {
  const [quotes, setQuotes] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    (async () => {
      const response = await quote.get(`/api/${keys.API_KEY}/quote?num=30`);
      setQuotes(response.data);
      console.log(response.data);
    })();
  }, []);

  return (
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
  );
}
