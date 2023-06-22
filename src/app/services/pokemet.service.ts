import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Result, Pokemons, Pokemon } from '../interfaces/interfaces';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemetServicioService {

  constructor(private http: HttpClient) { }

  getpokeMetodo(): Observable<Pokemons> {
    return this.http.get<Pokemons>("https://pokeapi.co/api/v2/pokemon/").pipe(
    
    );
  }

  getPokemonImageURL(pokemon: Pokemon): Observable<string> {
    const pokemonId = this.extractPokemonIdFromUrl(pokemon.url);
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
    return this.http.get(imageUrl, { responseType: 'blob' }).pipe(
      map((blob: Blob) => {
        const url = URL.createObjectURL(blob);
        return url;
      }),
  
    );
  }
  private extractPokemonIdFromUrl(url: string): string {
    // Extracción del ID del Pokémon a partir de la URL de la PokeAPI
    const segments = url.split('/').filter(segment => segment.trim() !== '');
    const pokemonId = segments[segments.length - 1];
    return pokemonId;
  }

}
