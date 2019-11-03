import { Component, OnInit } from "@angular/core";
import { SpaceXService } from "../space-x.service";

@Component({
  selector: "app-launches",
  templateUrl: "./launches.component.html",
  styleUrls: ["./launches.component.css"]
})
export class LaunchesComponent implements OnInit {
  constructor(private spaceXService: SpaceXService) {}

  public launches;

  ngOnInit() {
    this.spaceXService.getAllLaunches().subscribe(data => {
      this.launches = data;
    });
  }
}
