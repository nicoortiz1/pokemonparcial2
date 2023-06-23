export interface RootObject {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

/***********************************/
/*
export interface RootObjectPokemon {
  pokemon: Pokemon[];
  slot: number;
}
*/
export interface Pokemon {
  name: string;
  url: string;
}


export interface RootObject {
  results: Result[];
}





export interface RootObjectPokemon {
  damage_relations: Damagerelations;
  game_indices: Gameindex[];
  generation: Doubledamagefrom;
  id: number;
  move_damage_class: Doubledamagefrom;
  moves: Doubledamagefrom[];
  name: string;
  names: Name[];
  past_damage_relations: Pastdamagerelation[];
  pokemon: Pokemon[];
}

export interface Pokemon {
  pokemon: Doubledamagefrom;
  slot: number;
}

interface Pastdamagerelation {
  damage_relations: Damagerelations2;
  generation: Doubledamagefrom;
}

interface Damagerelations2 {
  double_damage_from: Doubledamagefrom[];
  double_damage_to: Doubledamagefrom[];
  half_damage_from: Doubledamagefrom[];
  half_damage_to: Doubledamagefrom[];
  no_damage_from: any[];
  no_damage_to: any[];
}

interface Name {
  language: Doubledamagefrom;
  name: string;
}

interface Gameindex {
  game_index: number;
  generation: Doubledamagefrom;
}

interface Damagerelations {
  double_damage_from: Doubledamagefrom[];
  double_damage_to: Doubledamagefrom[];
  half_damage_from: Doubledamagefrom[];
  half_damage_to: Doubledamagefrom[];
  no_damage_from: any[];
  no_damage_to: Doubledamagefrom[];
}

interface Doubledamagefrom {
  name: string;
  url: string;
}