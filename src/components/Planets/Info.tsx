import * as React from "react";

import { Grid, withStyles, createStyles, WithStyles } from "@material-ui/core";

interface IProps {
  info: {
    [key: string]: string;
  };
  title: string;
}

const styles = createStyles({
  container: {
    paddingLeft: "15vw"
  }
});

const Info: React.FC<IProps & WithStyles<typeof styles>> = props => {
  return (
    <Grid item xs={12} md={6} className={props.classes.container}>
      <h2>{props.title}</h2>
      {Object.keys(props.info).map(key => (
        <div>
          <strong>{key.replace("_", " ")}:</strong> {props.info[key]}
        </div>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(Info);
