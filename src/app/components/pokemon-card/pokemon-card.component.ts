import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input() name: string = '';
  @Input() types: any[] = [];
  @Input() image: any = '';
  public colorName: string = '';
  @Output()
  typeColor = new EventEmitter<string>();

  ngOnInit() {
    this.getColorName();
  }

  public getColorName() {
    if (this.types.length > 1 && this.types[0].type.name === 'normal') {
      this.colorName = this.types[1].type.name;
    } else if (this.types.length > 0) {
      this.colorName = this.types[0].type.name;
    } else {
      this.colorName = 'normal';
    }

    this.typeColor.emit(this.colorName);
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
}
