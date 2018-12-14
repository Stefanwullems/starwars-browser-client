import * as React from "react";
import Info from "../Reusable/Info";

interface IProps {
  content: Content;
}

const PlanetsPage: React.FC<IProps> = ({ content }) => {
  return (
    <React.Fragment>
      <Info
        title="Geographical Info"
        info={geographicalInfo(content as Planet)}
      />
      <Info
        title="Astronomical Info"
        info={astronomicalInfo(content as Planet)}
      />
    </React.Fragment>
  );
};

function geographicalInfo({
  climate,
  terrain,
  surface_water,
  population
}: Planet) {
  return { climate, terrain, surface_water, population };
}

function astronomicalInfo({
  rotation_period,
  orbital_period,
  diameter,
  gravity
}: Planet) {
  return { rotation_period, orbital_period, diameter, gravity };
}

export default PlanetsPage;
