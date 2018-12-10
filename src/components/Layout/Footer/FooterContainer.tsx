import * as React from "react";

import { Route } from "react-router-dom";
import NavFooter from "./NavFooter";

class FooterContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/:model/:id" component={NavFooter} />
      </React.Fragment>
    );
  }
}

export default FooterContainer;
