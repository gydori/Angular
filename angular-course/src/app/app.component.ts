import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-course";
  szam = "7";
  name: string; //Nem kell inicializálni
  check: boolean;

  hello() {
    alert("Hello");
  }

  greeter(): string {
    //ha van visszatérési érték, akkor így kell megadni
    alert("Hello " + this.name);
    return "";
  }

  reset() {
    if (!this.check) {
      if (this.name === undefined || this.name === "") {
        alert("De hiszen ez üres!");
      } else {
        this.name = undefined;
      }
    } else {
      alert("Védett");
    }
  }

  getColor() {
    if (this.name.length > 3) {
      return "lightblue";
    }
  }
}
