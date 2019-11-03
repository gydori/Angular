import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-food",
  templateUrl: "./food.component.html",
  styleUrls: ["./food.component.css"]
})
export class FoodComponent implements OnInit {
  @Output() childOnClick = new EventEmitter<object>();

  meat = { name: "meat", price: 1500 };
  flour = { name: "flour", price: 400 };
  cheese = { name: "cheese", price: 700 };
  food = [this.meat, this.flour, this.cheese];

  constructor() {}

  ngOnInit() {}

  onClick(veg) {
    this.childOnClick.next(veg);
  }
}
