export interface Pokemons {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
}

export interface Result {
name: string;
url: string;
imageURL: string; // Propiedad opcional para almacenar la URL de la imagen del Pokémon
}

export interface Pokemon {
name: string;
url: string;
sprites: {
front_default: string;
// Otras propiedades de sprites, si son necesarias
};
// Otras propiedades del Pokémon, si son necesarias
}
