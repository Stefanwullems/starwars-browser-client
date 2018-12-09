import * as React from "react";
import {
  createStyles,
  withStyles,
  WithStyles,
  Grid,
  Button
} from "@material-ui/core";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import cleanUpContent from "../../redux/actions/clean-up-content";

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

interface IProps extends WithStyles<typeof styles> {
  cleanUpContent: () => void;
}

class NavFooter extends React.Component<IProps & RouteComponentProps> {
  getPageUrl = (path: string, id: number, page: "Prev" | "Next") => {
    const n = page === "Prev" ? -1 : 1;
    return path.replace(":id", (id + n).toString());
  };
  buttonStyle = (orientation: "Left" | "Right") => ({
    marginRight: orientation === "Left" ? "20%" : "60%",
    marginLeft: orientation === "Left" ? "60%" : "20%"
  });

  handleClick() {
    this.props.cleanUpContent();
    this.forceUpdate();
  }

  render() {
    const { classes } = this.props;
    const path = this.props.match.path;
    const id = Number(this.props.match.params["id"]);

    return (
      <Grid container className={classes.footerContainer}>
        <Grid item xs={6}>
          <Link
            to={this.getPageUrl(path, id, "Prev")}
            onClick={this.handleClick.bind(this)}
          >
            <Button className={classes.button} style={this.buttonStyle("Left")}>
              Prev
            </Button>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link
            to={this.getPageUrl(path, id, "Next")}
            onClick={this.handleClick.bind(this)}
          >
            <Button
              className={classes.button}
              style={this.buttonStyle("Right")}
            >
              Next
            </Button>
          </Link>
        </Grid>
      </Grid>
    );
  }
}

const mdtp = { cleanUpContent };

const ConnectedNavFooter = connect(
  null,
  mdtp
)(NavFooter);

export default withStyles(styles)(ConnectedNavFooter);
