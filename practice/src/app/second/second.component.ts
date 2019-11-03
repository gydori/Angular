import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-second",
  templateUrl: "./second.component.html",
  styleUrls: ["./second.component.css"]
})
export class SecondComponent implements OnInit {
  element: string;
  isCollapsed = true;
  collapseMessage = "Collapse";
  @Input() elements: Array<string>;
  @Output() onAddClick = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onAdd() {
    this.onAddClick.next(this.element);
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
