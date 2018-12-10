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
import cleanUpContent from "src/redux/actions/clean-up-content";

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
  contentCount: number;
  loading: boolean;
}

class NavFooter extends React.Component<IProps & RouteComponentProps> {
  getPageUrl = (model: string, id: number, page: "Prev" | "Next") => {
    const n = page === "Prev" ? -1 : 1;

    return `/${model}/${id + n}`;
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
    const model = this.props.match.params["model"];
    const id = Number(this.props.match.params["id"]);

    return (
      <React.Fragment>
        {!this.props.loading && (
          <Grid container className={classes.footerContainer}>
            <Grid item xs={6}>
              {id > 1 && (
                <Link
                  to={this.getPageUrl(model, id, "Prev")}
                  onClick={this.handleClick.bind(this)}
                >
                  <Button
                    className={classes.button}
                    style={this.buttonStyle("Left")}
                  >
                    Prev
                  </Button>
                </Link>
              )}
            </Grid>
            <Grid item xs={6}>
              {id < this.props.contentCount && (
                <Link
                  to={this.getPageUrl(model, id, "Next")}
                  onClick={this.handleClick.bind(this)}
                >
                  <Button
                    className={classes.button}
                    style={this.buttonStyle("Right")}
                  >
                    Next
                  </Button>
                </Link>
              )}
            </Grid>
          </Grid>
        )}
      </React.Fragment>
    );
  }
}

const mstp = ({ contentCount, loading }) => ({ contentCount, loading });
const mdtp = { cleanUpContent };

const ConnectedNavFooter = connect(
  mstp,
  mdtp
)(NavFooter);

export default withStyles(styles)(ConnectedNavFooter);
