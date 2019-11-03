import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ngIf-ngClass-ngStyle";

  text: string;
  check: boolean;
  pColor = "blue";

  onChangeCategorySelect(event) {
    this.pColor = event.target.value;
  }

  setColor() {
    if (this.text.length >= 15) {
      return this.pColor;
    } else {
      return "black";
    }
  }
}
