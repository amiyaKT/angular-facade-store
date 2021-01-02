import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-list/todo-item/todo-item.component';
import { StoreModule } from '@ngrx/store';

import * as TodoReducer from './store/todo.reducer';
import { TodoFacade } from './store/todo.facade';

@NgModule({
  declarations: [HomeComponent, TodoListComponent, TodoItemComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    StoreModule.forFeature('todo', TodoReducer.reducer),
  ],
  providers: [TodoFacade],
})
export class TodoModule {}
