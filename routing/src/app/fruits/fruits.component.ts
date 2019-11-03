import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-fruits",
  templateUrl: "./fruits.component.html",
  styleUrls: ["./fruits.component.css"]
})
export class FruitsComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  applePieces: number;
  pearPieces: number;
  peachPieces: number;

  ngOnInit() {}

  onApple() {
    this.router.navigate(["apple"], { queryParams: { applePieces: 1 } });
  }

  onPeach() {
    this.router.navigate(["peach"], { queryParams: { peachPieces: 3 } });
  }

  onPear() {
    this.router.navigate(["pear"], { queryParams: { pearPieces: 5 } });
  }
}
