import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Input() title: string;
  @Output() childOnAdd = new EventEmitter<number>();
  @Output() childOnChange = new EventEmitter<String>();

  data = "";

  constructor() {}

  ngOnInit() {}

  onAdd() {
    this.childOnAdd.next(1);
  }

  onChange(value) {
    this.childOnChange.next(value);
  }
}
