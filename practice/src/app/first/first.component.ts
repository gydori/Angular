import { Component, OnInit } from "@angular/core";
import { element } from "protractor";

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.css"]
})
export class FirstComponent implements OnInit {
  num1: number;
  num2: number;
  add: number;
  isChecked = false;
  element: string = "";
  elements = [];
  isCollapsed = true;
  collapseMessage = "Collapse";

  constructor() {}

  ngOnInit() {}

  onSum() {
    this.add = this.num1 + this.num2;
  }

  getColor() {
    if (this.add > 100) {
      return "red";
    } else {
      return "green";
    }
  }

  onAdd() {
    this.elements.push(this.element);
  }

  disabledAdd() {
    if (
      this.element.length < 3 ||
      this.element.length > 13 ||
      this.elements.length >= 5
    ) {
      return true;
    }
    return false;
  }

  handleOnAddClick(element: string) {
    this.elements.push(element);
  }

  onCollapse() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.collapseMessage = "Collapse";
    } else {
      this.collapseMessage = "Show more";
    }
  }
}
