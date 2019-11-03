import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-device",
  templateUrl: "./device.component.html",
  styleUrls: ["./device.component.css"]
})
export class DeviceComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  samsungTomb = ["S7", "S8", "S9"];
  huaweiTomb = ["P8", "P9", "P20"];
  samsung = "Samsung";
  huawei = "Huawei";
}
