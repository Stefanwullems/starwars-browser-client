import * as React from "react";
import { connect } from "react-redux";
import fetchModel from "src/redux/actions/fetch-content";
import cleanUpContent from "src/redux/actions/clean-up-content";
import { RouteComponentProps } from "react-router";
import ModelHeader from "../Reusable/ModelHeader";
import { Grid } from "@material-ui/core";
import Info from "../Reusable/Info";

interface IProps {
  fetchModel: (model: Models, id: number) => void;
  cleanUpContent: () => void;
  content: Planet | null;
  loading: boolean;
  contentCount: number;
}

class PlanetsContainer extends React.Component<IProps & RouteComponentProps> {
  componentDidMount() {
    this.props.fetchModel("planets", this.props.match.params["id"]);
  }

  componentDidUpdate() {
    if (!this.props.content && !this.props.loading) {
      this.props.fetchModel("planets", this.props.match.params["id"]);
    }
  }

  componentWillUnmount() {
    this.props.cleanUpContent();
  }

  geographicalInfo() {
    const { climate, terrain, surface_water, population } = this.props.content;
    return { climate, terrain, surface_water, population };
  }

  astronomicalInfo() {
    const {
      rotation_period,
      orbital_period,
      diameter,
      gravity
    } = this.props.content;
    return { rotation_period, orbital_period, diameter, gravity };
  }

  render() {
    return (
      <React.Fragment>
        {!!this.props.content && (
          <React.Fragment>
            <ModelHeader name={this.props.content.name} />
            <Grid container>
              <Info title="Geographical Info" info={this.geographicalInfo()} />
              <Info title="Astronomical Info" info={this.astronomicalInfo()} />
            </Grid>
          </React.Fragment>
        )}
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
