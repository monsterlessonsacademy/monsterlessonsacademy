import { Component } from '@angular/core';
import { TodosService } from 'src/app/todos/services/todos';

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  text: string = '';

  constructor(private todosService: TodosService) {}

  changeText(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.text = value;
  }

  addTask(): void {
    this.todosService.addTodo(this.text);
    this.text = '';
  }
}
