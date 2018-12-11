import * as React from "react";
import NavHeader from "./NavHeader";
import { Grid } from "@material-ui/core";
import NavButton from "./NavButton";
import NavButtonLink from "./NavButtonLink";
import { connect } from "react-redux";
import fetchNamesAndIds from "src/redux/actions/fetch-names-and-ids";
import cleanUpNamesAndIds from "src/redux/actions/clean-up-names-and-ids";
import cleanUpContent from "src/redux/actions/clean-up-content";

interface IProps {
  forceUpdateApp: () => void;
  fetchNamesAndIds: (model: Models) => void;
  cleanUpNamesAndIds: () => void;
  cleanUpContent: () => void;
  namesAndIds: NameAndId[] | null;
}

interface IState {
  model: Models | null;
}

class NavBarContainer extends React.Component<IProps, IState> {
  readonly state: IState = {
    model: null
  };

  componentDidUpdate() {
    if (this.state.model && !this.props.namesAndIds) {
      this.props.fetchNamesAndIds(this.state.model);
    }
  }

  onClickNavButton(model) {
    this.setState({ model });
  }

  onClickBackButton() {
    this.props.cleanUpNamesAndIds();
    this.setState({ model: null });
  }

  componentWillUnmount() {
    this.props.cleanUpNamesAndIds();
  }

  render() {
    const forceUpdateApp = this.props.forceUpdateApp;
    const cleanUpContent = this.props.cleanUpContent;
    return (
      <React.Fragment>
        <NavHeader />
        <Grid container style={{ height: "94vh" }}>
          <Grid item xs={2} style={{ backgroundColor: "#24292e" }}>
            {!!this.props.namesAndIds && (
              <div onClick={this.onClickBackButton.bind(this)}>Back</div>
            )}
          </Grid>
          <Grid item xs={10}>
            {!this.props.namesAndIds && (
              <React.Fragment>
                <NavButtonLink to="/" onClick={this.props.forceUpdateApp}>
                  Home
                </NavButtonLink>
                <NavButton
                  model="characters"
                  onClick={this.onClickNavButton.bind(this)}
                >
                  Characters
                </NavButton>
                <NavButton
                  model="films"
                  onClick={this.onClickNavButton.bind(this)}
                >
                  Films
                </NavButton>
                <NavButton
                  model="planets"
                  onClick={this.onClickNavButton.bind(this)}
                >
                  Planets
                </NavButton>
              </React.Fragment>
            )}
            {!!this.props.namesAndIds && (
              <React.Fragment>
                {this.props.namesAndIds.map(nameAndId => {
                  return (
                    <NavButtonLink
                      key={nameAndId.id}
                      to={`/${this.state.model}/${nameAndId.id}`}
                      onClick={() => {
                        forceUpdateApp();
                        cleanUpContent();
                      }}
                    >
                      {nameAndId.name}
                    </NavButtonLink>
                  );
                })}
              </React.Fragment>
            )}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mstp = ({ namesAndIds }) => ({ namesAndIds });
const mdtp = { fetchNamesAndIds, cleanUpNamesAndIds, cleanUpContent };

export default connect(
  mstp,
  mdtp
)(NavBarContainer);
