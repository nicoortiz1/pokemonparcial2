import { Component, OnInit } from '@angular/core';
import { Tab1Page } from '../tab1.page';
import { PokeServicioService } from 'src/app/services/pokemet.service';
import { ActivatedRoute } from '@angular/router';
import {  Pokemon, Result, RootObject } from 'src/app/interfaces/interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listapoke',
  templateUrl: './listapoke.page.html',
  styleUrls: ['./listapoke.page.scss'],
})
export class ListapokePage implements OnInit {

  arregloInfoPersonajes: Pokemon[]=[];

  constructor(private PokeServicioService:PokeServicioService, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.PokeServicioService.getinfoPersonajes(this.PokeServicioService.pokeTipoFinal).subscribe(respuestaPokemon =>{
      console.log(respuestaPokemon);
      this.arregloInfoPersonajes=respuestaPokemon.pokemon;
  
    })

  

}
}
