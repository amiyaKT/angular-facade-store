import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { TodoFacade } from '../../store/todo.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private todoService: TodoService,
    private todoFacade: TodoFacade
  ) {}

  ngOnInit(): void {
    this.todoService
      .getTodos()
      .subscribe((data) => this.todoFacade.addTodos(data));
  }
}
