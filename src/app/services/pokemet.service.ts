import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result, Pokemons, Pokemon } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemetServicioService {

  constructor(private http:HttpClient) { }

  getpokeMetodo(){
    return this.http.get<Pokemons>("https://pokeapi.co/api/v2/pokemon/");
    }

    getPokemonImageURL(pokemon: Pokemon): string {
      const pokemonId = this.extractPokemonIdFromUrl(pokemon.url);
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
    }
    
    private extractPokemonIdFromUrl(url: string): string {
      // Extracción del ID del Pokémon a partir de la URL de la PokeAPI
      const segments = url.split('/').filter(segment => segment.trim() !== '');
      const pokemonId = segments[segments.length - 1];
      return pokemonId;
    }
    
}
