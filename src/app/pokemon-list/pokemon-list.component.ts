import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemetServicioService } from '../services/pokemet.service';
import { Result } from '../interfaces/interfaces';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Result[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemetService: PokemetServicioService
  ) {}

  ngOnInit() {
    const type: string = this.activatedRoute.snapshot.paramMap.get('type') ?? '';
    this.getPokemonsByType(type);
  }

  getPokemonsByType(type: string): void {
    this.pokemetService.getPokemonsByType(type).subscribe((response) => {
      this.pokemons = response.results;
    });
  }
}
