import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-pear",
  templateUrl: "./pear.component.html",
  styleUrls: ["./pear.component.css"]
})
export class PearComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  pearPieces: number;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.pearPieces = params.pearPieces;
    });
  }

  back() {
    this.router.navigate([""]);
  }
}
