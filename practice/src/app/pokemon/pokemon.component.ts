import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.css"]
})
export class PokemonComponent implements OnInit {
  pokemon: any;
  count: number;
  pokemons: Array<any> = [];
  name: string;
  url: string;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.get().subscribe(data => {
      this.pokemon = data;
      this.count = this.pokemon.count;
      this.pokemons = this.pokemon.results;
    });
  }

  onSubmit() {
    this.pokemons.push({ name: this.name, url: this.url });
    console.log(this.pokemons);
  }
}
