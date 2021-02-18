import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import Theme from "../helpers/theme";

const useStyles = makeStyles(Theme);

const handleInput = (e) => {
  e.preventDefault();
  console.log(e.target.value);
};

const Hero = () => {
  const classes = useStyles();
  return (
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
  );
};

export default Hero;
