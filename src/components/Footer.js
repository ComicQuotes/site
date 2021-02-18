import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Theme from "../helpers/theme";
import Emoji from "react-emoji-render";

const useStyles = makeStyles(Theme);

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        <Emoji text="Made with ❤️ by " />
        <Link color="inherit" href="https://github.com/NakshatraCodes">
          Nakshatra
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://github.com/ComicQuotes">
          Comic Quotes
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </footer>
  );
};

export default Footer;
