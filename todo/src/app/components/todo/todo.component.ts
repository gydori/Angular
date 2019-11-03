import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "src/app/todo.model";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  @Input() selectedTodoIds: Array<number>;
  @Input() todo: Todo;

  @Output() deleteClick: EventEmitter<number> = new EventEmitter<number>();
  @Output() selectClick: EventEmitter<Array<number>> = new EventEmitter<
    Array<number>
  >();

  constructor() {}

  ngOnInit() {}

  public delete() {
    this.deleteClick.emit(this.todo.id);
  }

  onCheckboxClick(event, id) {
    if (event.target.checked) {
      this.selectedTodoIds.push(id);
    }
    if (!event.target.checked) {
      this.selectedTodoIds.splice(this.selectedTodoIds.indexOf(id), 1);
    }
    console.log(this.selectedTodoIds);
    this.selectClick.next(this.selectedTodoIds);
  }
}
