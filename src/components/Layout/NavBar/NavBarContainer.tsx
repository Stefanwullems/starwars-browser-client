import * as React from "react";
import NavHeader from "./NavHeader";
import { Grid } from "@material-ui/core";
import NavButton from "./NavButton";

interface IProps {
  forceUpdateApp: () => void;
}

class NavBarContainer extends React.Component<IProps> {
  render() {
    return (
      <React.Fragment>
        <NavHeader />
        <Grid container style={{ height: "94vh" }}>
          <Grid item xs={2} style={{ backgroundColor: "#24292e" }} />
          <Grid item xs={10}>
            <NavButton to="/" onClick={this.props.forceUpdateApp}>
              Home
            </NavButton>
            <NavButton to="/characters/1" onClick={this.props.forceUpdateApp}>
              Characters
            </NavButton>
            <NavButton to="/films/1" onClick={this.props.forceUpdateApp}>
              Films
            </NavButton>
            <NavButton to="/planets/1" onClick={this.props.forceUpdateApp}>
              Planets
            </NavButton>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default NavBarContainer;
