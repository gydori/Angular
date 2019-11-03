import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  title = "dataFromParent";
  count = 0;
  data: string;

  constructor() {}

  ngOnInit() {}

  childOnAddHandler(value) {
    this.count = this.count + value;
  }

  childOnChangeHandler(value) {
    this.data = value;
  }
}
