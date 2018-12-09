import * as React from "react";
import { Link } from "react-router-dom";
import { withStyles, createStyles, WithStyles } from "@material-ui/core";

interface IProps extends WithStyles<typeof styles> {
  to: string;
  onClick: () => void;
}

const styles = createStyles({
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
});

const NavButton: React.FunctionComponent<IProps> = props => {
  const { to, classes, children } = props;

  return (
    <Link
      to={to}
      className={classes.link}
      onClick={e => {
        props.onClick();
      }}
    >
      <div className={classes.navButton}>{children}</div>
    </Link>
  );
};

export default withStyles(styles)(NavButton);
