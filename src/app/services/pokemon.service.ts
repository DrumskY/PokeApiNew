import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonInfo } from '../models/pokemon';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  constructor(private _http: HttpClient) {}

  public getPokemonList(changePage: number): Observable<Pokemon> {
    return this._http.get<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon?offset=${changePage}&limit=40`
    );
  }

  public getPokemonFullList(): Observable<Pokemon> {
    return this._http.get<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon?&offset=0&limit=1000`
    );
  }

  public getSimplePokemonDetails(name: string): Observable<PokemonInfo> {
    return this._http.get<PokemonInfo>(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
  }

  public getPokemonDetails(url: string): Observable<PokemonInfo> {
    return this._http.get<PokemonInfo>(url);
  }
}
