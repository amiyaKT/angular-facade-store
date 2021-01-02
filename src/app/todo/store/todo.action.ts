import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo-item';
import { ADD_TODOS, TOGGLE_TODO_STATUS, DELETE_TODO } from './todo.action.type';

export const addTodos = createAction(
  ADD_TODOS,
  props<{
    payload: Todo[];
  }>()
);

export const toggleTodo = createAction(
  TOGGLE_TODO_STATUS,
  props<{
    payload: number;
  }>()
);

export const removeTodo = createAction(
  DELETE_TODO,
  props<{
    payload: number;
  }>()
);
