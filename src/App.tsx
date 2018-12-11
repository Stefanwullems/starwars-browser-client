import * as React from "react";

import { Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import PlanetsContainer from "./components/Content/Planets/PlanetsContainer";
import HomeContainer from "./components/Home/HomeContainer";
import CharactersContainer from "./components/Content/Characters/CharactersContainer";

import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import FilmsContainer from "./components/Content/Films/FilmsContainer";

interface IProps {
  loading: boolean;
}

class App extends React.Component<IProps> {
  public render() {
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
        <Route path="/planets/:id" component={PlanetsContainer} />
        <Route path="/characters/:id" component={CharactersContainer} />
        <Route path="/films/:id" component={FilmsContainer} />
      </Layout>
    );
  }
}

const mstp = ({ loading }) => ({ loading });

export default connect(mstp)(App);
