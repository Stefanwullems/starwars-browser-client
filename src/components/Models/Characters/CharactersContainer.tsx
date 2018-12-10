import * as React from "react";
import ModelHeader from "../Reusable/ModelHeader";
import { Grid } from "@material-ui/core";
import Info from "../Reusable/Info";
import { connect } from "react-redux";
import fetchModel from "src/redux/actions/fetch-model";
import cleanUpContent from "src/redux/actions/clean-up-content";
import { RouteComponentProps } from "react-router";
import withLink from "../Reusable/withLink";

interface IProps {
  fetchModel: (model: Models, id: number) => void;
  cleanUpContent: () => void;
  content: Character | null;
  loading: boolean;
  forceUpdateApp: () => void;
}

class CharactersContainer extends React.Component<
  IProps & RouteComponentProps
> {
  readonly state = {
    homeworld: null,
    linksFetched: false
  };

  componentDidMount() {
    this.props.fetchModel("characters", this.props.match.params["id"]);
  }

  async componentDidUpdate() {
    if (!this.props.content) {
      if (!this.props.loading) {
        this.props.fetchModel("characters", this.props.match.params["id"]);
      }
    } else {
      if (!this.state.homeworld) {
        const homeworld = await withLink(
          "planets",
          this.props.content.homeworld,
          this.props.forceUpdateApp
        );
        this.setState({
          homeworld,
          linksFetched: true
        });
      }
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
      skin_color,
      homeworld: this.state.homeworld ? this.state.homeworld : undefined
    };
  }

  render() {
    return (
      <React.Fragment>
        {!!this.props.content && this.state.linksFetched && (
          <React.Fragment>
            <ModelHeader name={this.props.content.name} />
            <Grid container>
              <Info title="Personal Info" info={this.getPersonalInfo()} />
              <Info title="Astronomical Info" info={{ test: "test" }} />
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
