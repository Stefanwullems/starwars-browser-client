import * as React from "react";
import NavHeader from "./NavHeader";
import { Grid } from "@material-ui/core";
import NavButton from "./NavButton";

class NavBarContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavHeader />
        <Grid container style={{ height: "94vh" }}>
          <Grid item xs={2} style={{ backgroundColor: "#24292e" }} />
          <Grid item xs={10}>
            <NavButton to="/planets/1">Planets</NavButton>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default NavBarContainer;
