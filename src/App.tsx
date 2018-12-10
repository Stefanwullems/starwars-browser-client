import * as React from "react";

import { Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import PlanetsContainer from "./components/Models/Planets/PlanetsContainer";
import HomeContainer from "./components/Home/HomeContainer";
import CharactersContainer from "./components/Models/Characters/CharactersContainer";

import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";

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
        <Route exact path="/planets/:id" component={PlanetsContainer} />
        <Route exact path="/characters/:id" component={CharactersContainer} />
      </Layout>
    );
  }
}

const mstp = ({ loading }) => ({ loading });

export default connect(mstp)(App);
