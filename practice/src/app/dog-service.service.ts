import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DogServiceService {
  constructor(private httpClient: HttpClient) {}

  getDogs() {
    return this.httpClient.get("https://dog.ceo/api/breeds/image/random");
  }
}
