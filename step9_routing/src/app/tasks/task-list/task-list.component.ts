import { Component, OnInit } from "@angular/core";
import { Task } from "../task.model";
import { TaskService } from "../task.service";
import { LoggerService } from "../../shared/logger.service";
import "rxjs/Rx";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"]
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor(
    private taskService: TaskService,
    private loggerService: LoggerService
  ) {}

  ngOnInit() {
    this.taskService
      .getAll()
      .map(this.mapTodo)
      .subscribe(data => {
        this.loggerService.log(data);
      });
    this.tasks = this.taskService.getTasks();
  }

  mapTodo(todos: Todo[]): Task[] {
    return todos.map(t => new Task(t.title, t.completed ? 100 : 0, "", 4));
  }

  onStateHundred(task: Task) {
    alert(`${task.name} elérte a 100-at!`);
  }

  onTaskChanged(task: Task) {
    this.tasks[0] = task;
  }

  handleTaskSubmit(task: Task) {
    this.taskService.tasks.push(task);
    console.log(this.tasks);
  }
}

class Todo {
  public userId: number;
  public id: number;
  public title: string;
  public completed: number;
}
