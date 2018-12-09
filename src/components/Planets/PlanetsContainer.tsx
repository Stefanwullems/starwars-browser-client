import * as React from "react";
import { connect } from "react-redux";
import fetchPlanets from "../../redux/actions/fetch-planets";

interface Dispatch {
  fetchPlanets: (id: number) => void;
}

class PlanetsContainer extends React.Component<Dispatch> {
  componentDidMount() {
    this.props.fetchPlanets(1);
  }

  render() {
    return <div>planets</div>;
  }
}

const mdtp = {
  fetchPlanets
};

export default connect(
  null,
  mdtp
)(PlanetsContainer);
