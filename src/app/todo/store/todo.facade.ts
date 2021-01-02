import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoFeatureState } from '../models/todoFeatureState';
import { Todo } from '../models/todo-item';
import { addTodos, removeTodo, toggleTodo } from './todo.action';
import { selectAllTodos } from './todo.selector';

@Injectable()
export class TodoFacade {
  getAllTodos$ = this.store.select(selectAllTodos);

  constructor(private store: Store<TodoFeatureState>) {}

  addTodos(todos: Todo[]) {
    this.store.dispatch(
      addTodos({
        payload: todos,
      })
    );
  }

  toggleTodoStatus(id: number) {
    this.store.dispatch(
      toggleTodo({
        payload: id,
      })
    );
  }

  deleteTodo(id: number) {
    this.store.dispatch(
      removeTodo({
        payload: id,
      })
    );
  }
}
