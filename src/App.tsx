import * as React from "react";

import { Route } from "react-router-dom";

import Layout from "./components/Layout";
import PlanetsContainer from "./components/Planets/PlanetsContainer";
import HomeContainer from "./components/Home/HomeContainer";

import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";

interface IProps {
  loading: boolean;
}

class App extends React.Component<IProps> {
  public render() {
    return (
      <Layout forceUpdateApp={this.forceUpdate.bind(this)}>
        {this.props.loading && <CircularProgress />}
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/planets/:id" component={PlanetsContainer} />
      </Layout>
    );
  }
}

const mstp = ({ loading }) => ({ loading });

export default connect(mstp)(App);
