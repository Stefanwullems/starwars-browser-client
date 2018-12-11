import * as React from "react";
import ModelHeader from "../Reusable/ModelHeader";
import { Grid } from "@material-ui/core";
import Info from "../Reusable/Info";
import { connect } from "react-redux";
import fetchModel from "src/redux/actions/fetch-content";
import cleanUpContent from "src/redux/actions/clean-up-content";
import { RouteComponentProps } from "react-router";

interface IProps {
  fetchModel: (model: Models, id: number) => void;
  cleanUpContent: () => void;
  content: Character | null;
  loading: boolean;
}

class CharactersContainer extends React.Component<
  IProps & RouteComponentProps
> {
  componentDidMount() {
    this.props.fetchModel("characters", this.props.match.params["id"]);
  }

  async componentDidUpdate() {
    if (!this.props.content && !this.props.loading) {
      this.props.fetchModel("characters", this.props.match.params["id"]);
    }
  }

  componentWillUnmount() {
    this.props.cleanUpContent();
  }

  getPersonalInfo() {
    const {
      birth_year,
      eye_color,
      gender,
      hair_color,
      height,
      mass,
      skin_color
    } = this.props.content;
    return {
      birth_year,
      eye_color,
      gender,
      hair_color,
      height: height + " cm",
      mass: mass + " kg",
      skin_color
    };
  }

  render() {
    return (
      <React.Fragment>
        {!!this.props.content && (
          <React.Fragment>
            <ModelHeader name={this.props.content.name} />
            <Grid container>
              <Info title="Personal Info" info={this.getPersonalInfo()} />
            </Grid>
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
)(CharactersContainer);
