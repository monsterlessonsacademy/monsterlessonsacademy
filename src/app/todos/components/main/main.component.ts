import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../types/filter.enum';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todos-main',
  templateUrl: './main.component.html',
  standalone: true,
  imports: [TodoComponent, CommonModule],
})
export class MainComponent {
  todosService = inject(TodosService);
  editingId: string | null = null;

  isAllTodosSelected = computed(() =>
    this.todosService.todos().every((todo) => todo.isCompleted)
  );

  noTodosClass = computed(() => this.todosService.todos().length === 0);

  visibleTodos = computed(() => {
    const todos = this.todosService.todos();
    const filter = this.todosService.filter();
    if (filter === FilterEnum.active) {
      return todos.filter((todo) => !todo.isCompleted);
    } else if (filter === FilterEnum.completed) {
      return todos.filter((todo) => todo.isCompleted);
    }
    return todos;
  });

  toggleAllTodos(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.todosService.toggleAll(target.checked);
  }

  setEditingId(editingId: string | null): void {
    this.editingId = editingId;
  }
}
