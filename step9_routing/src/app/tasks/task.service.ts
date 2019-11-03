import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "../../../node_modules/rxjs/Observable";
import { Task } from "./task.model";
import { LoggerService } from "../shared/logger.service";
import { Router } from "@angular/router";

@Injectable()
export class TaskService {
  constructor(
    private httpClient: HttpClient,
    private loggerService: LoggerService,
    private router: Router
  ) {}

  tasks: Task[] = [
    new Task("Konyhafelújítás", 0, "A konyha felújítása", 1),
    new Task("Ajtók cseréje", 10, "Ajtócserék, surprise!", 2),
    new Task(
      "Betonozás",
      20,
      "Az udvar ne füves legyen, hanem betonnal borított!",
      3
    )
  ];

  getTasks() {
    return this.tasks;
  }

  getAll(): Observable<any> {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/todos");
  }

  get(id: number) {
    return new Task(
      `Task with number:{$id}`,
      0,
      `Description for task: {$id}`,
      id
    );
  }

  save(task: Task) {
    this.loggerService.log(task);
    this.router.navigate(["tasks"]);
  }
}
