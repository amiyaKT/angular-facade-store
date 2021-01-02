import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/todo/models/todo-item';
import { TodoFeatureState } from '../models/todoFeatureState';

import * as TodosAction from './todo.action';

export const initialState: TodoFeatureState = {
  todos: [],
};

const todosReducer = createReducer(
  initialState,
  on(TodosAction.addTodos, (state, action) => {
    return {
      ...state,
      todos: action.payload,
    };
  }),
  on(TodosAction.toggleTodo, (state, action) => {
    return {
      ...state,
      todos: state.todos.map((todoItem) =>
        todoItem.id === action.payload
          ? {
              ...todoItem,
              completed: !todoItem.completed,
            }
          : {
              ...todoItem,
            }
      ),
    };
  }),
  on(TodosAction.removeTodo, (state, action) => {
    return {
      ...state,
      todos: state.todos.filter((todoItem) => todoItem.id !== action.payload),
    };
  })
);

export function reducer(state: TodoFeatureState | undefined, action: Action) {
  return todosReducer(state, action);
}
