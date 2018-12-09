import * as React from "react";
import { connect } from "react-redux";
import fetchModel from "../../redux/actions/fetch-model";
import cleanUpContent from "../../redux/actions/clean-up-content";

interface Dispatch {
  fetchModel: (model: Models, id: number) => void;
  cleanUpContent: () => void;
}

class PlanetsContainer extends React.Component<Dispatch> {
  componentDidMount() {
    console.log("hi");
    this.props.fetchModel("planets", 1);
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
