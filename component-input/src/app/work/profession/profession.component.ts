import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-profession",
  templateUrl: "./profession.component.html",
  styleUrls: ["./profession.component.css"]
})
export class ProfessionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  profs = ["programozo", "szakacs", "pincer", "elado", "ugyved"];
  weLikeIt: boolean = true;
  message = "I don’t like it";

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
