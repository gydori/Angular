import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-peach",
  templateUrl: "./peach.component.html",
  styleUrls: ["./peach.component.css"]
})
export class PeachComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  peachPieces: number;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.peachPieces = params.peachPieces;
    });
  }

  back() {
    this.router.navigate([""]);
  }
}
