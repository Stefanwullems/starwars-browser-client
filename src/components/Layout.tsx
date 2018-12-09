import * as React from "react";
import { Grid, withStyles, createStyles, WithStyles } from "@material-ui/core";
import NavBarContainer from "./NavBar/NavBarContainer";

const styles = createStyles({
  navBar: {
    backgroundColor: "#202529",
    height: "100vh"
  },
  main: {}
});

class Layout extends React.Component<WithStyles<typeof styles>> {
  render() {
    const { classes, children } = this.props;
    console.log(children);
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
}

export default withStyles(styles)(Layout);
