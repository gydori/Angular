import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  onHome() {
    this.router.navigate([""]);
  }

  onDev() {
    this.router.navigate(["/developer"]);
  }

  onEng() {
    this.router.navigate(["/engineer"]);
  }

  onTeach() {
    this.router.navigate(["/teacher"]);
  }
}
