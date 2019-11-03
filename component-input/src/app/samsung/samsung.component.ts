import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-samsung",
  templateUrl: "./samsung.component.html",
  styleUrls: ["./samsung.component.css"]
})
export class SamsungComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input(name)
  name: string;

  @Input()
  tomb = [];
}
