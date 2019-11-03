import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  piece = 0;
  tomb = ["Alma", "Barack", "Körte"];
  count = 0;

  constructor() {}

  ngOnInit() {}

  childClickHandler(value) {
    this.piece = this.piece + value;
  }

  childClickMinHandler(value) {
    this.piece = this.piece - value;
  }

  childOnChangeHandler(value) {
    this.count = value;
  }

  childOnAddHandler(value) {
    this.tomb.push(value);
  }
}
