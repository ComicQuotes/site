import React from "react";
import Typography from "@material-ui/core/Typography";

const Badge = ({ name }) => {
  const styles = {
    marginTop: "20px",
    padding: "5px 15px",
    color: "white",
    fontWeight: "500",
    backgroundColor: "#d32f2f",
    borderRadius: "20px",
    maxWidth: "max-content",
    marginRight: "6px",
  };
  return (
    <Typography
      variant="subtitle1"
      color="textPrimary"
      paragraph
      style={styles}
    >
      {name}
    </Typography>
  );
};

export default Badge;
