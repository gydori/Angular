import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpaceXService {
  constructor(private httpClient: HttpClient) {}

  getAllRockets() {
    return this.httpClient.get("https://api.spacexdata.com/v3/rockets");
  }

  getAllHistory() {
    return this.httpClient.get("https://api.spacexdata.com/v3/history");
  }

  getAllLaunches() {
    return this.httpClient.get("https://api.spacexdata.com/v3/launches");
  }

  getRocket(id) {
    return this.httpClient.get(
      "https://api.spacexdata.com/v3/rockets/{{rocket.id}}"
    );
  }
}
