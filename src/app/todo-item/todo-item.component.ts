import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TodoItem } from '../types';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
	@Input() task: TodoItem = {id: 0, content: '', isFinished: new FormControl<boolean>(false)};
	@Output() deleteItemEvent = new EventEmitter<number>();

	handleDeleteItem() {
		this.deleteItemEvent.emit(this.task.id);
	}
}
