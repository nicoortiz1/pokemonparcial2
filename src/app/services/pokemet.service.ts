import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result, RootObject } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class PokeServicioService {

  constructor(private http:HttpClient) { }

  getpokeMetodo(){
    return this.http.get<RootObject>("https://pokeapi.co/api/v2/type/");
    }
    
    infoName: string="";
    asignarName(name: string){
      this.infoName = name;
    }

    getNamePoke(name: string) {
      return this.http.get<RootObject>("https://pokeapi.co/api/v2/pokemon/+name");
    }
    
      
    }