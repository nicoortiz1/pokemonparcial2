import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent {
  pokemonTypes: string[] = ['Water', 'Fire', 'Grass', 'Electric', 'Normal', 'Flying', 'Rock', 'Ground', 'Psychic', 'Fighting'];

  constructor(private router: Router) {}

  goToPokemonList(type: string) {
    this.router.navigate(['/pokemon-list', type]);
  }
}
