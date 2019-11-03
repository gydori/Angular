import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-laptops",
  templateUrl: "./laptops.component.html",
  styleUrls: ["./laptops.component.css"]
})
export class LaptopsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  acerTomb = ["swift-7", "spin-3", "aspire-5"];
  toshibaTomb = ["Portege-Z30", "Satellite Pro"];
  hpTomb = ["Probook", "Elitebook", "G1", "Pavilion"];
}
