import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-vegetables",
  templateUrl: "./vegetables.component.html",
  styleUrls: ["./vegetables.component.css"]
})
export class VegetablesComponent implements OnInit {
  @Output() childOnClick = new EventEmitter<object>();

  paradise = { name: "paradise", price: 300 };
  pepper = { name: "pepper", price: 800 };
  carrot = { name: "carrot", price: 200 };
  vegetables = [this.paradise, this.pepper, this.carrot];

  constructor() {}

  ngOnInit() {}

  onClick(veg) {
    this.childOnClick.next(veg);
  }
}
