import { TestBed } from '@angular/core/testing';

import { PokeServicioService } from './pokemet.service';

describe('PokeServicioService', () => {
  let service: PokeServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});