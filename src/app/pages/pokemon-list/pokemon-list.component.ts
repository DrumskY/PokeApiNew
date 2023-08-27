import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PokemonInfo, PokemonResult } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  public details: PokemonInfo[] = [];
  public detailsForAllPokemons: PokemonInfo[] = [];
  public searchDetails: PokemonInfo[] = [];
  public changePage: number = 0;
  public searchByName: string = '';
  public isLoadingData: boolean = true;
  public typeColor: string = '';

  constructor(
    private _router: Router,
    private _pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.getPokemonList();
    this.getPokemonFullList();
  }

  public prevPage() {
    this.changePage -= 40;
    this.getPokemonList();
  }

  public nextPage(): void {
    this.changePage += 40;
    this.getPokemonList();
  }

  public scrollToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  public getPokemonList() {
    this.isLoadingData = true;
    this.details = [];
    this.searchDetails = this.details;
    this._pokemonService
      .getPokemonList(this.changePage)
      .subscribe((pokemon) => {
        pokemon.results.forEach((details) => {
          this.getPokemonDetails(details.url);
        });
      });
    this.isLoadingData = false;
  }

  public getPokemonDetails(url: string) {
    this._pokemonService.getPokemonDetails(url).subscribe((details) => {
      this.details.push(details);
    });
  }

  public getPokemonFullList() {
    // this.isLoadingData = true;
    this.detailsForAllPokemons = [];
    this._pokemonService.getPokemonFullList().subscribe((pokemon) => {
      pokemon.results.forEach((details) => {
        this.getPokemonFullDetails(details.url);
      });
    });
    // this.isLoadingData = false;
  }

  public getPokemonFullDetails(url: string) {
    this._pokemonService.getPokemonDetails(url).subscribe((details) => {
      this.detailsForAllPokemons.push(details);
    });
  }

  searchPokemonByType(type: string) {
    if (type !== 'All') {
      this.details = this.detailsForAllPokemons.filter((pokemon) => {
        return pokemon.types.find((pokemonType) => {
          return pokemonType.type.name === type;
        });
      });
    } else {
      this.details = this.searchDetails;
    }
  }

  public searchPokemon(event: KeyboardEvent): void {
    event.preventDefault();
    const searchTerm = (event.target as HTMLInputElement).value;
    if (!searchTerm) {
      this.details = this.searchDetails;
    } else {
      this.details = this.detailsForAllPokemons;
      this.details = this.details.filter((searchName) =>
        searchName.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  public goToPokemonDetails(pokemon: string, typeColor: string) {
    const navigationExtras: NavigationExtras = {
      state: {
        name: pokemon,
        typeColor: typeColor,
      },
    };
    this._router.navigate(['/details', pokemon]);
  }
}
