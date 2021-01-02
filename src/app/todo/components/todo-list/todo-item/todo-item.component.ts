import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo/models/todo-item';
import { TodoFacade } from 'src/app/todo/store/todo.facade';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input()
  public todo!: Todo;

  constructor(private todoFacade: TodoFacade) {}

  ngOnInit(): void {}

  todoStatus() {
    this.todoFacade.toggleTodoStatus(this.todo.id);
  }

  removeTodo() {
    this.todoFacade.deleteTodo(this.todo.id);
  }
}
