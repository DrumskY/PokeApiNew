import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonInfo } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  public name: string = '';
  public pokemonImage: string = '';
  public pokemon!: PokemonInfo;
  public colorName: string = '';

  constructor(
    private _pokemonService: PokemonService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((details) => {
      console.log(details);
      this.name = details['name'];
    });
    this.getSimplePokemonDetails();
  }

  public getSimplePokemonDetails() {
    this._pokemonService
      .getSimplePokemonDetails(this.name)
      .subscribe((pokemon) => {
        this.pokemon = pokemon;
        this.getPokemonImage();
        console.log(this.pokemon);
        this.getColorName();
      });
  }

  public getPokemonImage() {
    if (this.pokemon.sprites.other?.dream_world.front_default) {
      this.pokemonImage = this.pokemon.sprites.other?.dream_world.front_default;
    } else if (this.pokemon.sprites.other?.home.front_default) {
      this.pokemonImage = this.pokemon.sprites.other?.home.front_default;
    } else if (this.pokemon.sprites.other?.['official-artwork'].front_default) {
      this.pokemonImage =
        this.pokemon.sprites.other?.['official-artwork'].front_default;
    }
  }

  public getColorName() {
    if (
      this.pokemon.types.length > 1 &&
      this.pokemon.types[0].type.name === 'normal'
    ) {
      this.colorName = this.pokemon.types[1].type.name;
    } else if (this.pokemon.types.length > 0) {
      this.colorName = this.pokemon.types[0].type.name;
    } else {
      this.colorName = 'normal';
    }
  }

  public getBackgroundColor() {
    switch (this.colorName) {
      case 'normal':
        return 'normal-class-background';
      case 'fire':
        return 'fire-class-background';
      case 'water':
        return 'water-class-background';
      case 'electric':
        return 'electric-class-background';
      case 'grass':
        return 'grass-class-background';
      case 'ice':
        return 'ice-class-background';
      case 'fighting':
        return 'fighting-class-background';
      case 'poison':
        return 'poison-class-background';
      case 'ground':
        return 'ground-class-background';
      case 'flying':
        return 'flying-class-background';
      case 'psychic':
        return 'psychic-class-background';
      case 'bug':
        return 'bug-class-background';
      case 'rock':
        return 'rock-class-background';
      case 'ghost':
        return 'ghost-class-background';
      case 'dragon':
        return 'dragon-class-background';
      case 'dark':
        return 'dark-class-background';
      case 'steel':
        return 'steel-class-background';
      case 'fairy':
        return 'fairy-class-background';
      default:
        return '';
    }
  }

  public navigateBack() {
    this._router.navigate(['']);
  }
}
