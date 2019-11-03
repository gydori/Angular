import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  money = 10000;
  inCart = [];
  message = "add to cart";
  isIn = false;
  constructor() {}

  ngOnInit() {}

  childOnClickHandler(value) {
    this.inCart.push(value);
    this.money = this.money - value.price;
    this.isIn = !this.isIn;
    // MESSAGE NEM MŰKÖDIK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    this.message = this.isIn ? "delete from cart" : "add to cart";
    console.log(this.inCart, this.money);
  }
}
