import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-housework",
  templateUrl: "./housework.component.html",
  styleUrls: ["./housework.component.css"]
})
export class HouseworkComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  hws = ["mosas", "fozes", "takaritas", "mosogatas", "ablakpucolas"];
  weLikeIt: boolean = false;
  message = "I like it";

  @Input()
  title: string;

  getColor() {
    return this.weLikeIt ? "green" : "red";
  }

  onClick() {
    this.weLikeIt = !this.weLikeIt;
    this.weLikeIt
      ? (this.message = "I don’t like it")
      : (this.message = "I like it");
  }
}
