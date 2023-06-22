export interface Pokemons {
        count: number;
        next: string;
        previous?: any;
        results: Result[];
}

export interface Result {
  name: string;
  url: string;
  type: string;
  imageUrl: string;
}

