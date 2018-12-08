import * as React from "react";

import { Route } from "react-router-dom";

import Layout from "./components/Layout";
import PlanetsContainer from "./components/Planets/PlanetsContainer";

class App extends React.Component {
  public render() {
    return (
      <Layout>
        <Route path="/planets/:id" component={PlanetsContainer} />
      </Layout>
    );
  }
}

export default App;
