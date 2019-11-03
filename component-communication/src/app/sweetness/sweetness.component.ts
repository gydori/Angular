import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-sweetness",
  templateUrl: "./sweetness.component.html",
  styleUrls: ["./sweetness.component.css"]
})
export class SweetnessComponent implements OnInit {
  @Output() childOnClick = new EventEmitter<object>();

  message: string;
  chocolate = { name: "chocolate", price: 150 };
  iceCream = { name: "iceCream", price: 1200 };
  cake = { name: "cake", price: 600 };
  sweetness = [this.chocolate, this.iceCream, this.cake];

  constructor() {}

  ngOnInit() {}

  onClick(veg) {
    this.childOnClick.next(veg);
  }
}
