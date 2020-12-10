type Films = Film[];

type Film = {
  id: string;
  title: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  rt_score: string;
  people: string[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string;
};

type People = Person[];

type Person = {
  id: string;
  name: string;
  gender: string;
  age: string;
  eye_color: string;
  hair_color: string;
  films: string[];
  species: string;
  url: string;
};

type Species = {
  id: string;
  name: string;
  classification: string;
  eye_colors: string;
  hair_colors: string;
  people: string[];
  films: string[];
  url: string;
};

type APILocations = APILocation[];

type APILocation = {
  id: string;
  name: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string[];
  films: string[];
  url: string[];
};

type Vehicles = Vehicle[];

type Vehicle = {
  id: string;
  name: string;
  description: string;
  vehicle_class: string;
  length: string;
  pilot: string;
  films: string;
  url: string;
};
