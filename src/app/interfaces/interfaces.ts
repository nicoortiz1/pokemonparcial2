export interface Result {
  name: string;
  url: string;
  imageURL?: string;
}

export interface Pokemons {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

export interface Pokemon {
  name: string;
  url: string;

}
