import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private users: Array<User>;

  constructor(private httpClient: HttpClient) {}

  private userRoot = "https://jsonplaceholder.typicode.com/users";

  public getAll() {
    this.httpClient
      .get(this.userRoot)
      .subscribe((users: any) => (this.users = users));
  }

  public getUserById(id: number): Observable<any> {
    return this.httpClient.get(`${this.userRoot}/${id}`);
  }

  public getUserByIdLocal(id: number): User {
    return this.users.filter(u => (u.id = id))[0];
  }
}
