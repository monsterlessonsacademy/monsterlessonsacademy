import { Component, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { TodosFirebaseService } from '../../services/todosFirebase.service';

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html',
  standalone: true,
})
export class HeaderComponent {
  todosService = inject(TodosService);
  todosFirebaseService = inject(TodosFirebaseService);
  text: string = '';

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  addTodo(): void {
    this.todosFirebaseService.addTodo(this.text).subscribe((addedTodoId) => {
      this.todosService.addTodo(this.text, addedTodoId);
      this.text = '';
    });
  }
}
