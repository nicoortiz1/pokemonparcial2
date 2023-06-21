import { TestBed } from '@angular/core/testing';
import { PokemetServicioService } from './pokemet.service';
import { Result, Pokemons,  } from '../interfaces/interfaces';

describe('PokemonService', () => {
  let service: PokemetServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemetServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
