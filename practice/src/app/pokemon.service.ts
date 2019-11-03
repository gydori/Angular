import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  constructor(private httpCLient: HttpClient) {}

  get() {
    return this.httpCLient.get("https://pokeapi.co/api/v2/pokemon/");
  }
}
