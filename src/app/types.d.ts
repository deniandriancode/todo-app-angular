import { FormControl } from '@angular/forms';

export interface TodoItem {
	id: number;
	content: string;
	isFinished: FormControl<any>;
}
