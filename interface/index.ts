export interface CharacterInterface {
  created: string;
  episode: Array<string>;
  gender: "Male" | "Female";
  image: string;
  id: number;
  name: string;
  locatin: {
    name: string;
    url: string;
  };
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: "Alive" | "Dead" | "unknown";
  type: string;
  url: string;
}

export interface InfoInterface {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface FetchCharacterInterface {
  info: InfoInterface;
  results: CharacterInterface[];
}
