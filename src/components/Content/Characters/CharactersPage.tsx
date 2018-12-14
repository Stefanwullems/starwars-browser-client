import * as React from "react";
import Info from "../Reusable/Info";

interface IProps {
  content: Content;
}

const CharactersPage: React.FC<IProps> = ({ content }) => {
  return (
    <React.Fragment>
      <Info
        title="Personal Info"
        info={getPersonalInfo(content as Character)}
      />
    </React.Fragment>
  );
};

function getPersonalInfo(content: Character) {
  return {
    birth_year: content.birth_year,
    eye_color: content.eye_color,
    gender: content.gender,
    hair_color: content.hair_color,
    height: content.height + " cm",
    mass: content.mass + " kg",
    skin_color: content.skin_color
  };
}

export default CharactersPage;
