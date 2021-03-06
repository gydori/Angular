import { Component, OnInit } from "@angular/core";
import { UserServiceService } from "../user-service.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  constructor(private userServiceService: UserServiceService) {}

  users = [];
  ngOnInit() {
    this.users = this.userServiceService.getUser();
  }
}
