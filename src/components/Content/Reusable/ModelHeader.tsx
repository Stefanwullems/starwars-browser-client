import * as React from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core";

interface IProps {
  name: string;
}

const styles = createStyles({
  headerText: {
    textAlign: "center"
  }
});

const Header: React.FC<IProps & WithStyles<typeof styles>> = props => {
  const { name, classes } = props;
  return (
    <div>
      <h1 className={classes.headerText}>{name}</h1>
    </div>
  );
};

export default withStyles(styles)(Header);
