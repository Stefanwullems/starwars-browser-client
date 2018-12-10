import * as React from "react";
import { Grid, withStyles, createStyles, WithStyles } from "@material-ui/core";
import NavBarContainer from "./NavBar/NavBarContainer";
import FooterContainer from "./Footer/FooterContainer";

interface IProps extends WithStyles<typeof styles> {
  forceUpdateApp: () => void;
}

const styles = createStyles({
  navBar: {
    backgroundColor: "#202529",
    height: "100vh"
  },
  main: {},
  footer: {
    bottom: 0,
    position: "absolute"
  }
});

class Layout extends React.Component<IProps> {
  render() {
    const { classes, children } = this.props;
    return (
      <Grid container>
        <Grid item xs={2}>
          <nav className={classes.navBar}>
            <NavBarContainer forceUpdateApp={this.props.forceUpdateApp} />
          </nav>
        </Grid>
        <Grid item xs={10}>
          <main className={classes.main}>{children}</main>
          <footer className={classes.footer}>
            <FooterContainer />
          </footer>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Layout);
