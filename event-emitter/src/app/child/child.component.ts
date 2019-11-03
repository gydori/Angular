import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { toPublicName } from "@angular/compiler/src/i18n/serializers/xmb";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Input() size: number;

  @Output() childClick = new EventEmitter<number>();
  @Output() childClickMin = new EventEmitter<number>();
  @Output() childOnChange = new EventEmitter<number>();
  @Output() childOnAdd = new EventEmitter<String>();

  count = 0;
  new: string;

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.childClick.next(10);
  }

  onClickMin() {
    this.childClickMin.next(1);
  }

  onChange() {
    if (this.count < this.size - 1) {
      this.count++;
    } else {
      this.count = 0;
    }
    this.childOnChange.next(this.count);
  }

  onAdd() {
    this.childOnAdd.next(this.new);
    this.new = "";
  }
}
