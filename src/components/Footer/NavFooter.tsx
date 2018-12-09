import * as React from "react";
import {
  createStyles,
  withStyles,
  WithStyles,
  Grid,
  Button
} from "@material-ui/core";
import { RouteComponentProps } from "react-router";

const styles = createStyles({
  footerContainer: {
    width: "83.3333333333vw",
    height: "6vh"
  },
  button: {
    width: "20%",
    backgroundColor: "#ddd"
  }
});

interface IProps extends WithStyles<typeof styles> {}

const NavFooter: React.FC<IProps & RouteComponentProps> = props => {
  const { classes } = props;

  return (
    <Grid container className={classes.footerContainer}>
      <Grid item xs={6}>
        <Button className={classes.button} style={buttonStyle("Left")}>
          Prev
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button className={classes.button} style={buttonStyle("Right")}>
          Next
        </Button>
      </Grid>
    </Grid>
  );
};

const buttonStyle = (orientation: "Left" | "Right") => ({
  marginRight: orientation === "Left" ? "20%" : "60%",
  marginLeft: orientation === "Left" ? "60%" : "20%"
});

export default withStyles(styles)(NavFooter);
