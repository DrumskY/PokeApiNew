import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonTypesSearchComponent } from './components/pokemon-types-search/pokemon-types-search.component';
import { DarkModeButtonComponent } from './components/dark-mode-button/dark-mode-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
    PokemonCardComponent,
    PokemonTypesSearchComponent,
    DarkModeButtonComponent,
  ],
  imports: [
    MatProgressSpinnerModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
