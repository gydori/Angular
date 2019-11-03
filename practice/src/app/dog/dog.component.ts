import { Component, OnInit } from "@angular/core";
import { DogServiceService } from "../dog-service.service";

@Component({
  selector: "app-dog",
  templateUrl: "./dog.component.html",
  styleUrls: ["./dog.component.css"]
})
export class DogComponent implements OnInit {
  url: string;
  constructor(private dogService: DogServiceService) {}

  ngOnInit() {
    this.dogService.getDogs().subscribe((adat: any) => {
      this.url = adat.message;
    });
  }
}
