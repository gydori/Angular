import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-hp",
  templateUrl: "./hp.component.html",
  styleUrls: ["./hp.component.css"]
})
export class HpComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  nationality = "USA";

  @Input()
  type: string;

  @Input()
  name: string;

  @Input()
  like: boolean;

  getColor() {
    return this.like ? "green" : "red";
  }
}
