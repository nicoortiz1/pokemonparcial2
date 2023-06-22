import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemetServicioService {
  private apiUrl = "https://pokeapi.co/api/v2/";

  constructor(private http: HttpClient) {}

  getPokemonsByType(type: string): Observable<{ results: Result[] }> {
    return this.http.get<{ results: Result[] }>(`${this.apiUrl}type/${type}`);
  }
}
