import { Component } from '@angular/core';
import { PokeServicioService } from '../services/pokemet.service';
import { OnInit } from '@angular/core';
import { Result, RootObject } from '../interfaces/interfaces';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  pokeArreglo: Result[] = []
  
  constructor(private pokePropiedad:PokeServicioService) {}
  
  ngOnInit(){
    this.pokePropiedad.getpokeMetodo().subscribe(pokeRespuesta => {
      console.log(pokeRespuesta);
      this.pokeArreglo=pokeRespuesta.results
    })
  
  }
  //trae el name
  public poketipo(name:string){
    this.pokePropiedad.getNamePoke(name);
    }
}