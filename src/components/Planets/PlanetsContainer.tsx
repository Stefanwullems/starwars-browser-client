import * as React from "react";
import { connect } from "react-redux";
import fetchModel from "../../redux/actions/fetch-model";
import cleanUpContent from "../../redux/actions/clean-up-content";
import { RouteComponentProps } from "react-router";
import Header from "./Header";
import NotFound from "../ErrorPages/NotFound";

interface IProps {
  fetchModel: (model: Models, id: number) => void;
  cleanUpContent: () => void;
  content: Content;
  loading: boolean;
  contentCount: number;
}

class PlanetsContainer extends React.Component<IProps & RouteComponentProps> {
  componentDidMount() {
    this.props.fetchModel("planets", this.props.match.params["id"]);
  }

  async componentDidUpdate() {
    if (!this.props.content && !this.props.loading) {
      this.props.fetchModel("planets", this.props.match.params["id"]);
    }
  }

  componentWillUnmount() {
    this.props.cleanUpContent();
  }

  render() {
    return (
      <React.Fragment>
        {!!this.props.content && <Header name={this.props.content.name} />}
      </React.Fragment>
    );
  }
}

const mstp = ({ content, loading, contentCount }) => ({
  content,
  loading,
  contentCount
});
const mdtp = { fetchModel, cleanUpContent };

export default connect(
  mstp,
  mdtp
)(PlanetsContainer);
