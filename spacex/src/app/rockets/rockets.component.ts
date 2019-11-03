import { Component, OnInit } from "@angular/core";
import { SpaceXService } from "../space-x.service";

@Component({
  selector: "app-rockets",
  templateUrl: "./rockets.component.html",
  styleUrls: ["./rockets.component.css"]
})
export class RocketsComponent implements OnInit {
  constructor(private spaceXService: SpaceXService) {}

  id: number;
  public rocketById;
  public rockets;

  ngOnInit() {
    this.spaceXService.getAllRockets().subscribe(data => {
      this.rockets = data;
    });
  }

  onClick(id) {
    this.spaceXService.getRocket(id).subscribe(data => {
      this.rocketById = data;
    });
  }
}
