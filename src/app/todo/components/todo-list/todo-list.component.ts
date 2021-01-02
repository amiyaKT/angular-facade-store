import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/todo/models/todo-item';
import { TodoFacade } from '../../store/todo.facade';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  public todos$: Observable<Todo[]> = this.todoFacade.getAllTodos$;

  constructor(private todoFacade: TodoFacade) {}

  ngOnInit(): void {}
}
