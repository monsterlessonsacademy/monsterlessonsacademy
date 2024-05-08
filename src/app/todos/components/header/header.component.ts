import { Component, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { TodosSupabaseService } from '../../services/todosSupabase.service';

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html',
  standalone: true,
})
export class HeaderComponent {
  todosService = inject(TodosService);
  todosSupabaseService = inject(TodosSupabaseService);
  text: string = '';

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  addTodo(): void {
    this.todosSupabaseService.addTodo(this.text).subscribe((createdTodo) => {
      this.todosService.addTodo(createdTodo);
      this.text = '';
    });
  }
}
