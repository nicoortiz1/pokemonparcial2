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
  tiposPokemonFiltrados: Result[] = [];

  pokeArreglo: Result[] = [];
  searchTerm: string = '';

  letras: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  constructor(private pokePropiedad: PokeServicioService) {}
  
  ngOnInit(){
    this.pokePropiedad.getpokeMetodo().subscribe(pokeRespuesta => {
      console.log(pokeRespuesta);
      this.pokeArreglo = pokeRespuesta.results;
      this.tiposPokemonFiltrados = this.pokeArreglo;
    });
  }
  
  public poketipo(name:string){
    this.pokePropiedad.getNamePoke(name);
  }

  filtrarPorLetra(letra: string) {
    this.tiposPokemonFiltrados = this.pokeArreglo.filter(result => {
      return result.name.charAt(0).toUpperCase() === letra.toUpperCase();
    });
  }

  filtrarPorBusqueda() {
    if (this.searchTerm.trim() !== '') {
      this.tiposPokemonFiltrados = this.pokeArreglo.filter(result =>
        result.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.tiposPokemonFiltrados = this.pokeArreglo;
    }
  }
}



  