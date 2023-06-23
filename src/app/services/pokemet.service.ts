import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result, RootObject, RootObjectPokemon } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class PokeServicioService {

  constructor(private http:HttpClient) { }

  getpokeMetodo(){
    return this.http.get<RootObject>("https://pokeapi.co/api/v2/type");
    }

    pokeTipoFinal: string="";
    
    getNamePoke(nameTipo: string) {
      this.pokeTipoFinal = nameTipo;
    }

    getinfoPersonajes(nameTipo: string){
      return this.http.get<RootObjectPokemon>("https://pokeapi.co/api/v2/type/"+ nameTipo);      
    }
  
    getFiltroLetra(letra: string){
      return this.http.get<RootObjectPokemon>("https://pokeapi.co/api/v2/type/"+ letra);      
    }
}