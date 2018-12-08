import * as React from "react";
import { Grid, withStyles } from "@material-ui/core";
import NavBarContainer from "./NavBar/NavBarContainer";

interface IProps {
  children: any;
  classes: any;
}

const styles = {
  navBar: {
    backgroundColor: "#202529",
    height: "100vh"
  },
  main: {}
};

function Layout({ children, classes }: IProps) {
  return (
    <Grid container>
      <Grid item xs={2} className={classes.navBar}>
        <NavBarContainer />
      </Grid>
      <Grid item xs={10} className={classes.main}>
        {children}
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Layout);
