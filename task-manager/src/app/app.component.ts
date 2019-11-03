import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "task-manager";
  name = "task";
  id = "2";
  isImportant = true;
  num1: number;
  num2: number;
  sum: number;
  name1: string;
  message: string;
  show = false;
  short = false;
  checkbox: boolean;

  hello() {
    alert("Hello");
  }

  count() {
    this.sum = this.num1 + this.num2;
    alert(this.sum);
    if (this.sum > 1000) {
      alert("Big number");
    } else {
      alert("Small number");
    }
  }

  onClick() {
    if (this.name1.length < 3) {
      this.short = true;
    } else {
      this.show = !this.show;
    }
  }
}
