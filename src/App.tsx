import * as React from "react";

import { Route } from "react-router-dom";

import Layout from "./Components/Layout";
import PlanetsContainer from "./Components/Planets/PlanetsContainer";

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
