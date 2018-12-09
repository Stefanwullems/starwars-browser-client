import * as React from "react";
import { withStyles, WithStyles, createStyles } from "@material-ui/core";

interface IProps extends WithStyles<typeof styles> {}

const styles = createStyles({
  header: {
    color: "#606060",
    margin: 0,
    paddingTop: "2vh",
    textAlign: "center"
  },
  container: {
    backgroundColor: "#24292e",
    height: "6vh"
  }
});

const NavHeader: React.FunctionComponent<IProps> = props => {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <h2 className={classes.header}>Browser</h2>
    </div>
  );
};

export default withStyles(styles)(NavHeader);
