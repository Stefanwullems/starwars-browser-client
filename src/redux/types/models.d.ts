type Content = Planet | Character;
type Models = "planets" | "characters";

interface Planet {
  name: string;
  climate: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
}

interface Character {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
}
