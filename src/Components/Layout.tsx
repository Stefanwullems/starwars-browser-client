import * as React from "react";
import { Grid, withStyles } from "@material-ui/core";

interface IProps {
  children: any;
  classes: any;
}

const styles = {
  navBar: {
    backgroundColor: "#24292e",
    height: "100vh"
  },
  main: {}
};

function Layout({ children, classes }: IProps) {
  return (
    <Grid container>
      <Grid item xs={2} className={classes.navBar}>
        <h2>Browser</h2>
      </Grid>
      <Grid item xs={10} className={classes.main}>
        {children}
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Layout);
