import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core";

interface IProps extends WithStyles<typeof styles> {
  onClick: (model: Models) => void;
  model: Models;
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
  }
});

const NavButton: React.FunctionComponent<IProps> = props => {
  const { classes, children, model } = props;

  return (
    <div
      onClick={e => {
        props.onClick(model);
      }}
      className={classes.navButton}
    >
      {children}
    </div>
  );
};

export default withStyles(styles)(NavButton);
