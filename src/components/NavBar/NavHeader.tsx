import * as React from "react";
import { withStyles } from "@material-ui/core";

interface IProps {
  classes: any;
}

const styles = {
  header: {
    color: "#606060",
    margin: 0,
    paddingTop: "2vh"
  },
  container: {
    backgroundColor: "#24292e",
    height: "6vh"
  }
};

function NavHeader({ classes }: IProps) {
  return (
    <div className={classes.container}>
      <h2 className={classes.header} style={{ textAlign: "center" }}>
        Browser
      </h2>
    </div>
  );
}

export default withStyles(styles)(NavHeader);
