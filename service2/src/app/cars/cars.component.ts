import { Component, OnInit } from "@angular/core";
import { CarServiceService } from "../car-service.service";

@Component({
  selector: "app-cars",
  templateUrl: "./cars.component.html",
  styleUrls: ["./cars.component.css"]
})
export class CarsComponent implements OnInit {
  constructor(private carServiceService: CarServiceService) {}

  cars = [];
  selectedValue: string;
  max: number;

  id: number;
  manufacturer: string;
  seats: number;
  type: string;
  color: string;

  onChangeNumHandler(value) {
    this.max = value;
  }

  onChangeCategorySelect(event) {
    this.selectedValue = event.target.value;
    switch (this.selectedValue) {
      case "allcars":
        this.cars = this.carServiceService.getAllCars();
        break;
      case "familycars":
        this.cars = this.carServiceService.getFamilyCars();
        break;
      case "sportcars":
        this.cars = this.carServiceService.getSportsCars();
        break;
    }
  }

  ngOnInit() {
    this.cars = this.carServiceService.getAllCars();
  }

  onClick() {
    this.carServiceService.addSportCar(
      this.id,
      this.manufacturer,
      this.seats,
      this.type,
      this.color
    );
    alert("Successfully added!");
    this.id = null;
    this.manufacturer = null;
    this.seats = null;
    this.type = null;
    this.color = null;
  }
}
