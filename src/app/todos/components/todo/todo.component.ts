import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TodoInterface } from 'src/app/todos/types/todo.interface';
import { TodosService } from '../../services/todos';

@Component({
  selector: 'app-todos-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  @Input('isEditing') isEditingProps!: boolean;
  @Input('todo') todoProps!: TodoInterface;

  @Output('setEditingId') setEditingIdEvent: EventEmitter<
    string | null
  > = new EventEmitter();

  editingText: string = '';

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.editingText = this.todoProps.text;
  }

  removeTodo(): void {
    this.todosService.removeTodo(this.todoProps.id);
  }

  toggleTodo(): void {
    this.todosService.toggleTodo(this.todoProps.id);
  }

  setTodoInEditingMode(): void {
    this.setEditingIdEvent.emit(this.todoProps.id);
  }

  changeText(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
  }

  changeTodo(): void {
    this.todosService.changeTodo(this.todoProps.id, this.editingText);
    this.setEditingIdEvent.emit(null);
  }
}
