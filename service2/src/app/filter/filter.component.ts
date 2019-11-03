import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { SourceListMap } from "source-list-map";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  @Output() onChangeNum = new EventEmitter<number>();

  max: number;
  constructor() {}

  ngOnInit() {}

  changeNum(value) {
    this.onChangeNum.next(value);
  }
}
