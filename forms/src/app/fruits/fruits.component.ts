import { Component, OnInit } from "@angular/core";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { resetFakeAsyncZone } from "@angular/core/testing";

@Component({
  selector: "app-fruits",
  templateUrl: "./fruits.component.html",
  styleUrls: ["./fruits.component.css"]
})
export class FruitsComponent implements OnInit {
  public name: string;
  public color: string;
  public kalories: number;
  public size: string;
  public id = 1;
  public isSaved = false;
  public fruit: object;
  public fruits = [];

  constructor() {}

  ngOnInit() {}

  onChange(event) {
    this.size = event.target.value;
  }

  onSave() {
    this.isSaved = true;
    this.fruit = {
      id: this.id,
      name: this.name,
      color: this.color,
      kalories: this.kalories,
      size: this.size
    };
    console.log(this.fruit);
    this.fruits.push(this.fruit);
    this.id++;
    this.name = null;
    this.color = null;
    this.kalories = null;
    this.size = null;
  }
}
