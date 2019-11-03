import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-apple",
  templateUrl: "./apple.component.html",
  styleUrls: ["./apple.component.css"]
})
export class AppleComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  applePieces: number;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.applePieces = params.applePieces;
    });
  }

  back() {
    this.router.navigate([""]);
  }
}
