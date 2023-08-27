import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-types-search',
  templateUrl: './pokemon-types-search.component.html',
  styleUrls: ['./pokemon-types-search.component.scss'],
})
export class PokemonTypesSearchComponent {
  @Output() typeSelected: EventEmitter<string> = new EventEmitter<string>();

  public sendSelectedType(type: string): void {
    this.typeSelected.emit(type);
  }
}
