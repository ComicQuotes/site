import React from "react";
import Typography from "@material-ui/core/Typography";

const APIBar = ({ title, url, desc, color }) => {
  const styles = {
    bar: {
      marginTop: "12px",
      padding: "8px 15px",
      //   border: "1px solid #49cc90",
      borderRadius: "5px",
      // maxWidth: "max-content",
      minWidth: "100%",
      //   backgroundColor: "#e8f6f0",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      // justifyContent: "center",
    },
    title: {
      marginRight: "10px",
      padding: "4px 30px",
      borderRadius: "5px",
      maxWidth: "max-content",
      //   backgroundColor: "#49cc90",
      color: "white",
      fontWeight: "600",
    },
    desc: {
      marginLeft: "20px",
      fontWeight: "400",
      fontSize: 16,
    },
  };

  switch (color) {
    case "green": {
      styles.bar.border = "1px solid #49cc90";
      styles.bar.backgroundColor = "#e8f6f0";
      styles.title.backgroundColor = "#49cc90";
      break;
    }
    case "blue": {
      styles.bar.border = "1px solid #61affe";
      styles.bar.backgroundColor = "#ebf3fb";
      styles.title.backgroundColor = "#61affe";
      break;
    }
    case "red": {
      styles.bar.border = "1px solid #d32f2f";
      styles.bar.backgroundColor = "#fae7e7";
      styles.title.backgroundColor = "#d32f2f";
      break;
    }
  }
  return (
    <Typography
      variant="h6"
      color="textPrimary"
      align="center"
      style={styles.bar}
    >
      <div style={styles.title}>{title}</div>
      <div>{url}</div>
      <div style={styles.desc}>{desc}</div>
    </Typography>
  );
};

export default APIBar;
