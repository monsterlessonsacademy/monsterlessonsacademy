import { Component } from '@angular/core';
import { TodosService } from 'src/app/services/todos';

@Component({
  selector: 'app-header',
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
    console.log('addTask', this.text);
    this.todosService.addTask(this.text);
    this.text = '';
  }
}
