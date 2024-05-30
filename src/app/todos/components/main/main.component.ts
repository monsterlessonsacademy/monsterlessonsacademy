import { Component, computed, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { CommonModule } from '@angular/common';
import { FilterEnum } from '../../types/filter.enum';
import { TodoComponent } from '../todo/todo.component';
import { forkJoin, of } from 'rxjs';
import { TodosSupabaseService } from '../../services/todosSupabase.service';

@Component({
  selector: 'app-todos-main',
  templateUrl: './main.component.html',
  standalone: true,
  imports: [CommonModule, TodoComponent],
})
export class MainComponent {
  todosService = inject(TodosService);
  todosSupabaseService = inject(TodosSupabaseService);
  editingId: number | null = null;

  visibleTodos = computed(() => {
    const todos = this.todosService.todosSig();
    const filter = this.todosService.filterSig();

    if (filter === FilterEnum.active) {
      return todos.filter((todo) => !todo.is_completed);
    } else if (filter === FilterEnum.completed) {
      return todos.filter((todo) => todo.is_completed);
    }
    return todos;
  });
  isAllTodosSelected = computed(() =>
    this.todosService.todosSig().every((todo) => todo.is_completed)
  );
  noTodosClass = computed(() => this.todosService.todosSig().length === 0);

  setEditingId(editingId: number | null): void {
    this.editingId = editingId;
  }

  toggleAllTodos(event: Event): void {
    const target = event.target as HTMLInputElement;
    const requests$ = this.todosService.todosSig().map((todo) => {
      return this.todosSupabaseService.updateTodo(todo.id, {
        text: todo.text,
        is_completed: target.checked,
      });
    });
    forkJoin(requests$).subscribe(() => {
      this.todosService.toggleAll(target.checked);
    });
  }
}
