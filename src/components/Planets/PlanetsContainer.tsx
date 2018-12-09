import * as React from "react";
import { connect } from "react-redux";
import fetchModel from "../../redux/actions/fetch-model";
import cleanUpContent from "../../redux/actions/clean-up-content";
import { RouteComponentProps } from "react-router";

interface MappedProps extends RouteComponentProps {
  fetchModel: (model: Models, id: number) => void;
  cleanUpContent: () => void;
}

interface IProps extends MappedProps {}

class PlanetsContainer extends React.Component<IProps> {
  componentDidMount() {
    this.props.fetchModel("planets", this.props.match.params["id"]);
  }

  componentWillUnmount() {
    this.props.cleanUpContent();
  }

  render() {
    return <div>planets</div>;
  }
}

const mstp = ({ content }) => ({ content });
const mdtp = { fetchModel, cleanUpContent };

export default connect(
  mstp,
  mdtp
)(PlanetsContainer);
