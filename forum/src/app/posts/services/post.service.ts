import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../models/post.model";

@Injectable({
  providedIn: "root"
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  private postRoot = "https://jsonplaceholder.typicode.com/posts";

  public getAll(): Observable<any> {
    return this.httpClient.get(this.postRoot);
  }
}
