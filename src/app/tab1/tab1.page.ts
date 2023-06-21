import { Component } from '@angular/core';
import { PokemetServicioService } from '../services/pokemet.service';
import { OnInit } from '@angular/core';
import { Result, Pokemons } from '../interfaces/interfaces';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  pokeArre: Result[] = []

  constructor(private propokemon:PokemetServicioService) {}
  ngOnInit(){
    this.propokemon.getpokeMetodo().subscribe( Respuestapoke => {
      console.log(Respuestapoke);
      this.pokeArre=Respuestapoke.results
    })
    }
    

}
