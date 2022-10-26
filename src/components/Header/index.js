import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./style";

const Header = () => {
  const classes = useStyles();
  return (
    <Typography variant="h4" align="center" className={classes.container}>
      Blog
    </Typography>
  );
};

export default Header;
