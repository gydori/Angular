import { Component, OnInit } from "@angular/core";
import { SpaceXService } from "../space-x.service";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"]
})
export class HistoryComponent implements OnInit {
  constructor(private spaceXService: SpaceXService) {}

  public history;

  ngOnInit() {
    this.spaceXService.getAllHistory().subscribe(data => {
      this.history = data;
    });
  }
}
