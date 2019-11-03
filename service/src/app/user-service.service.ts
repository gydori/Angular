import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserServiceService {
  constructor() {}

  user = [
    {
      id: 1,
      name: "Máté",
      gender: "male"
    },
    {
      id: 2,
      name: "Feri",
      gender: "female"
    },
    {
      id: 3,
      name: "Robi",
      gender: "male"
    }
  ];

  getUser() {
    return this.user;
  }
}
