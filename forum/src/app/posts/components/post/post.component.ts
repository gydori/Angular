import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../../models/post.model";
import { UserService } from "../../services/user.service";
import { User } from "../../models/user.model";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  userName: string;
  user: User;

  @Input() post: Post;
  constructor(private userService: UserService) {}

  ngOnInit() {
    // this.userService
    //   .getUserById(this.post.userId)
    //   .subscribe((user: User) => (this.userName = user.name));

    this.user = this.userService.getUserByIdLocal(this.post.userId);
  }
}
