import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemetServicioService {

  constructor(private http:HttpClient) { }

  getpokeMetodo(){
    return this.http.get("https://pokeapi.co/api/v2/pokemon/");
    }
    


}
