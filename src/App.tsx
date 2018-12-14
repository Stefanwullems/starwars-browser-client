import * as React from "react";

import { Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import PlanetsPage from "./components/Content/Planets/PlanetsPage";
import HomeContainer from "./components/Home/HomeContainer";
import CharactersPage from "./components/Content/Characters/CharactersPage";
import FilmsPage from "./components/Content/Films/FilmsPage";

import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import ContentContainer from "./components/Content/ContentContainer";

interface IProps {
  loading: boolean;
  content: Content;
}

class App extends React.Component<IProps> {
  public render() {
    const content = this.props.content;
    return (
      <Layout forceUpdateApp={this.forceUpdate.bind(this)}>
        {this.props.loading && (
          <CircularProgress
            style={{
              width: 80,
              height: 80,
              right: ((window.innerWidth / 12) * 10) / 2 - 40,
              top: window.innerHeight / 2 - 40,
              position: "absolute"
            }}
          />
        )}
        <Route exact path="/" component={HomeContainer} />
        <Route
          path="/planets/:id"
          render={props => {
            return (
              <ContentContainer {...props} model="planets">
                <PlanetsPage content={content} />
              </ContentContainer>
            );
          }}
        />
        <Route
          path="/characters/:id"
          render={props => {
            return (
              <ContentContainer {...props} model="characters">
                <CharactersPage content={content} />
              </ContentContainer>
            );
          }}
        />
        <Route
          path="/films/:id"
          render={props => {
            return (
              <ContentContainer {...props} model="films">
                <FilmsPage content={content} />
              </ContentContainer>
            );
          }}
        />
      </Layout>
    );
  }
}

const mstp = ({ loading, content }) => ({ loading, content });

export default connect(mstp)(App);
