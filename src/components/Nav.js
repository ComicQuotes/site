import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Theme from "../helpers/theme";

const useStyles = makeStyles(Theme);

const Nav = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <FormatQuoteIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" className={classes.title}>
            Comic Quotes
          </Typography>
          <Button color="inherit">API</Button>
          <Button color="inherit">Features</Button>
          <Button
            color="inherit"
            onClick={(e) => {
              e.preventDefault();
              window.open("http://buymeacoffee.com/nakshatrasaxena", "_blank");
            }}
          >
            Donate
          </Button>
          <Button color="inherit">Github</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
