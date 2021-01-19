import { Component, Input } from '@angular/core';

import { TodoInterface } from 'src/app/todos/types/todo.interface';

@Component({
  selector: 'app-todos-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  @Input('editingId') editingIdProps!: string | null;
  @Input('todo') todoProps!: TodoInterface;

  editingText: string = '';

  removeTodo(): void {
    console.log('removeTodo');
  }

  toggleTodo(): void {
    console.log('toggleTodo');
  }

  setTodoInEditingMode(): void {
    console.log('setTodoInEditingMode');
  }

  changeText(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
  }

  changeTodo(): void {
    console.log('changeTodo');
  }
}
