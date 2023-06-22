import { Component, OnInit } from '@angular/core';
import { PokemetServicioService } from '../services/pokemet.service';
import { Result, Pokemon } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  pokeArre: Result[] = [];

  constructor(private propokemon: PokemetServicioService) {}

  ngOnInit() {
    this.propokemon.getpokeMetodo().subscribe(Respuestapoke => {
      console.log(Respuestapoke);
      this.pokeArre = Respuestapoke.results;
      this.getPokemonImages();
    });
  }

  getPokemonImages() {
    for (const pokemon of this.pokeArre) {
      this.propokemon.getPokemonImageURL(pokemon).subscribe((imageUrl: string) => {
        pokemon.imageURL = imageUrl;
      });
    }
  }
  
}

