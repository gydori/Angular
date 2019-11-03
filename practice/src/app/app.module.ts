import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";
import { PokemonComponent } from "./pokemon/pokemon.component";
import { GreenDirective } from "./green.directive";
import { DogComponent } from "./dog/dog.component";

const myRoutes: Routes = [
  { path: "", component: FirstComponent },
  { path: "pokemons", component: PokemonComponent },
  { path: "dogs", component: DogComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PokemonComponent,
    GreenDirective,
    DogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
