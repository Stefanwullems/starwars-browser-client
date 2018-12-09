import * as React from "react";
import { connect } from "react-redux";
import fetchModel from "../../redux/actions/fetch-model";
import cleanUpContent from "../../redux/actions/clean-up-content";
import { RouteComponentProps } from "react-router";

interface IProps {
  fetchModel: (model: Models, id: number) => void;
  cleanUpContent: () => void;
  content: Content;
  loading: boolean;
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
    return <div>planets</div>;
  }
}

const mstp = ({ content, loading }) => ({ content, loading });
const mdtp = { fetchModel, cleanUpContent };

export default connect(
  mstp,
  mdtp
)(PlanetsContainer);
