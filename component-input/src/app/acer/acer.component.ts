import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-acer",
  templateUrl: "./acer.component.html",
  styleUrls: ["./acer.component.css"]
})
export class AcerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  nationality = "Tajvan";

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
