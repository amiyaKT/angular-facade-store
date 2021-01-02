import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoFeatureState } from 'src/app/todo/models/todoFeatureState';

export const selectTodoFeature = createFeatureSelector<TodoFeatureState>(
  'todo'
);

export const selectAllTodos = createSelector(
  selectTodoFeature,
  (state: TodoFeatureState) => {
    return state.todos;
  }
);
