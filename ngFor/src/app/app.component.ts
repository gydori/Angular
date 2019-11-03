import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ngFor";

  arr = [1, 2, 3, 4, 5];
  sumOdd = 0;
  sumEven = 0;
  isSmaller: string;

  getColor(i) {
    if (i === 2) {
      return "green";
    }
  }

  sum() {
    this.sumOdd = 0;
    for (let i = 0; i < this.arr.length; i++) {
      if (i % 2 == 1) {
        this.sumOdd += this.arr[i];
      }
    }
    return this.sumOdd;
  }

  smaller() {
    this.sumEven = 0;
    for (let i = 0; i < this.arr.length; i++) {
      if (i % 2 == 0) {
        this.sumEven += this.arr[i];
      }
    }
    if (this.sumEven < this.arr[1]) {
      this.isSmaller = "bigger";
    } else {
      this.isSmaller = "smaller";
    }
    return this.isSmaller;
  }
}
