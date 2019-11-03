import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-huawei",
  templateUrl: "./huawei.component.html",
  styleUrls: ["./huawei.component.css"]
})
export class HuaweiComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input(name)
  name: string;

  @Input()
  tomb = [];
}
