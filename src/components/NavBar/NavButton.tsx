import * as React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";

interface IProps {
  to: string;
  children: string;
  classes: any;
}

const styles = {
  navButton: {
    color: "#fff",
    borderBottomColor: "#24292e",
    borderBottom: "solid",
    borderWidth: 2,
    height: "3vh",
    paddingTop: "1.5vh",
    paddingLeft: 20,
    "&:hover": {
      backgroundColor: "#24292e"
    }
  },
  link: {
    textDecoration: "none"
  }
};

function NavButton({ to, children, classes }: IProps) {
  return (
    <Link to={to} className={classes.link}>
      <div className={classes.navButton}>{children}</div>
    </Link>
  );
}

export default withStyles(styles)(NavButton);
