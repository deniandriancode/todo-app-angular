import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TodoItem } from '../types';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
	task = new FormControl('');
	count = 0;
	taskList: TodoItem[] = [];

	addTask(e: any): void {
		if (this.task.value!.trim().length == 0) {
			return;
		}

		this.taskList.push({
			id: this.count++,
			content: this.task.value!,
			isFinished: new FormControl<boolean>(false)
		});

		this.task.setValue('');
	}

	deleteItem(id: number) {
		this.taskList = this.taskList.filter((t) => t.id != id);
	}
}
