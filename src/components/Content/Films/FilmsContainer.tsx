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
  content: Film | null;
  loading: boolean;
}

class FilmsContainer extends React.Component<IProps & RouteComponentProps> {
  componentDidMount() {
    this.props.fetchModel("films", this.props.match.params["id"]);
  }

  async componentDidUpdate() {
    if (!this.props.content && !this.props.loading) {
      this.props.fetchModel("films", this.props.match.params["id"]);
    }
  }

  componentWillUnmount() {
    this.props.cleanUpContent();
  }

  getFilmInfo() {
    const { director, producer, release_date } = this.props.content;
    return { director, producer, release_date };
  }

  render() {
    return (
      <React.Fragment>
        {!!this.props.content && (
          <React.Fragment>
            <ModelHeader name={this.props.content.title} />
            <Grid container>
              <Info title="Film Info" info={this.getFilmInfo()} />
              <Info
                title="Opening Crawl"
                info={{ opening_crawl: this.props.content.opening_crawl }}
              />
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
)(FilmsContainer);
