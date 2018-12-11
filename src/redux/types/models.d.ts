type Content = Planet | Character | Film;
type Models = "planets" | "characters" | "films";

interface NameAndId {
  id: number;
  name: string;
}

interface Planet {
  id: number;
  name: string;
  climate: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: null;
  films: null;
}

interface Character {
  id: number;
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: null;
  species: null;
  starships: null;
  vehicles: null;
}

interface Film {
  id: number;
  title: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  species: null;
  starships: null;
  vehicles: null;
  characters: null;
  planets: null;
}
