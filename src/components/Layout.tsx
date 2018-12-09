import * as React from "react";
import { Grid, withStyles, createStyles, WithStyles } from "@material-ui/core";
import NavBarContainer from "./NavBar/NavBarContainer";

interface IProps extends WithStyles<typeof styles> {}

const styles = createStyles({
  navBar: {
    backgroundColor: "#202529",
    height: "100vh"
  },
  main: {}
});

const Layout: React.FunctionComponent<IProps> = props => {
  const { classes, children } = props;
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
};

export default withStyles(styles)(Layout);
