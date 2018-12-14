import * as React from "react";
import ModelHeader from "./Reusable/ModelHeader";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import fetchModel from "src/redux/actions/fetch-content";
import cleanUpContent from "src/redux/actions/clean-up-content";
import { RouteComponentProps } from "react-router";

interface IProps {
  fetchModel: (model: Models, id: number) => void;
  cleanUpContent: () => void;
  content: Content | null;
  loading: boolean;
}

class ContentContainer extends React.Component<IProps & RouteComponentProps> {
  componentDidMount() {
    this.props.fetchModel("characters", this.props.match.params["id"]);
  }

  componentDidUpdate() {
    if (!this.props.content && !this.props.loading) {
      this.props.fetchModel("characters", this.props.match.params["id"]);
    }
  }
  componentWillUnmount() {
    this.props.cleanUpContent();
  }

  render() {
    return (
      <React.Fragment>
        {!!this.props.content && (
          <React.Fragment>
            <ModelHeader name={this.props.content.name} />
            <Grid container>{this.props.children}</Grid>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

const mstp = ({ content, loading }) => ({ content, loading });
const mdtp = { fetchModel, cleanUpContent };

export default connect(
  mstp,
  mdtp
)(ContentContainer);
