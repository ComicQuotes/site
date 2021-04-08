import react from "react";

import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Theme from "../helpers/theme";

const useStyles = makeStyles(Theme);

const Cards = ({ quotes }) => {
  const classes = useStyles();
  return (
    <react.Fragment>
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
    </react.Fragment>
  );
};

export default Cards;
