export interface Character {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  url: string;
  created: string;
}

export interface CharacterDetails extends Character {
  homeworldDetails?: Homeworld;
  speciesDetails?: Species[];
}

export interface Homeworld {
  name: string;
  terrain: string;
  climate: string;
  population: string;
}

export interface Species {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  language: string;
}

export interface ApiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
