import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [
      AppComponent,
      TodoComponent,
      TodoItemComponent
  ],
  imports: [
      BrowserModule,
	  ReactiveFormsModule
  ],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
