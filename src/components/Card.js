import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Theme from "../helpers/theme";

const useStyles = makeStyles(Theme);

export default function MyCard(props) {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} style={{ width: "85vw" }}>
      {/* End hero unit */}
      <Grid container spacing={4}>
        {props.data.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  color="textPrimary"
                >
                  <Box fontWeight={600} fontSize={18}>
                    Despite everything, I believe people are good at heart.
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
                    - Anne Frank
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
                    ID-1
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
