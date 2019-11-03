import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { TaskService } from "../task.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Task } from "../task.model";

@Component({
  selector: "app-task-edit",
  templateUrl: "./task-edit.component.html",
  styleUrls: ["./task-edit.component.css"]
})
export class TaskEditComponent implements OnInit {
  taskId: number;
  taskName: string;
  taskState: number;
  taskDescription: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  public task: Task;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.task = this.taskService.get(params.id);
      console.log(this.task);
    });
  }

  onClick() {
    this.router.navigate(["tasks"]);
  }

  onSubmit() {
    this.task = new Task(
      this.taskName,
      this.taskState,
      this.taskDescription,
      4
    );
    this.taskService.save(this.task);
    this.taskService.tasks.push(this.task);
  }
}
