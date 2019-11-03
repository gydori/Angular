import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-toshiba",
  templateUrl: "./toshiba.component.html",
  styleUrls: ["./toshiba.component.css"]
})
export class ToshibaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  nationality = "Japán";

  @Input()
  type: string;

  @Input()
  name: string;

  @Input()
  like: boolean;

  getColor() {
    return this.like ? "green" : "red";
  }
}
