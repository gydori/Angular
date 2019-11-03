import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-engineer",
  templateUrl: "./engineer.component.html",
  styleUrls: ["./engineer.component.css"]
})
export class EngineerComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  name: string;
  ngOnInit() {}

  onClick() {
    this.name = "engineer";
  }
}
