import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
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
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Comic Quotes
            </Link>
          </Typography>
          <Link
            to="/api-docs"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">API</Button>
          </Link>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">GET API KEY</Button>
          </Link>
          <Button
            color="inherit"
            onClick={(e) => {
              e.preventDefault();
              window.open("http://buymeacoffee.com/nakshatrasaxena", "_blank");
            }}
          >
            Donate
          </Button>
          <Button
            color="inherit"
            onClick={(e) => {
              e.preventDefault();
              window.open("http://github.com/ComicQuotes", "_blank");
            }}
          >
            Github
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
