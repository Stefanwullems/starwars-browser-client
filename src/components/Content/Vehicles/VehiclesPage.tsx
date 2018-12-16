import * as React from "react";
import Info from "../Reusable/Info";

interface IProps {
  content: Content;
}

const VehiclesPage: React.FC<IProps> = ({ content }) => {
  return (
    <React.Fragment>
      <Info
        title="Vehicle Info"
        info={vehicleInfo(content as Vehicle)}
      />
      <Info
        title="Economical Info"
        info={economicalInfo(content as Vehicle)}
      />
    </React.Fragment>
  );
};

function vehicleInfo({
  model,
  vehicle_class,
  manufacturer,
  length, 
  max_atmosphering_speed, 
  cargo_capacity
}: Vehicle) {
  return { model,
    vehicle_class,
    manufacturer,
    length,
    max_atmosphering_speed , 
    cargo_capacity};
}

function economicalInfo({
  cost_in_credits,
  crew,
  passengers,
  consumables
}: Vehicle) {
  return { cost_in_credits, crew, passengers, consumables };
}

export default VehiclesPage;
