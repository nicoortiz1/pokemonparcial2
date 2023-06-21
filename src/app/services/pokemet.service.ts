import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result, Pokemons } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class PokemetServicioService {

  constructor(private http:HttpClient) { }

  getpokeMetodo(){
    return this.http.get<Pokemons>("https://pokeapi.co/api/v2/pokemon/");
    }
    


}
