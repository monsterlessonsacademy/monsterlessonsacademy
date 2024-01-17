import { Component, computed, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { CommonModule } from '@angular/common';
import { FilterEnum } from '../../types/filter.enum';
import { TodoComponent } from '../todo/todo.component';
import { forkJoin } from 'rxjs';
import { TodosFirebaseService } from '../../services/todosFirebase.service';

@Component({
  selector: 'app-todos-main',
  templateUrl: './main.component.html',
  standalone: true,
  imports: [CommonModule, TodoComponent],
})
export class MainComponent {
  todosService = inject(TodosService);
  todosFirebaseService = inject(TodosFirebaseService);
  editingId: string | null = null;

  visibleTodos = computed(() => {
    const todos = this.todosService.todosSig();
    const filter = this.todosService.filterSig();

    if (filter === FilterEnum.active) {
      return todos.filter((todo) => !todo.isCompleted);
    } else if (filter === FilterEnum.completed) {
      return todos.filter((todo) => todo.isCompleted);
    }
    return todos;
  });
  isAllTodosSelected = computed(() =>
    this.todosService.todosSig().every((todo) => todo.isCompleted)
  );
  noTodosClass = computed(() => this.todosService.todosSig().length === 0);

  setEditingId(editingId: string | null): void {
    this.editingId = editingId;
  }

  toggleAllTodos(event: Event): void {
    const target = event.target as HTMLInputElement;
    const requests$ = this.todosService.todosSig().map((todo) => {
      return this.todosFirebaseService.updateTodo(todo.id, {
        text: todo.text,
        isCompleted: target.checked,
      });
    });
    forkJoin(requests$).subscribe(() => {
      this.todosService.toggleAll(target.checked);
    });
  }
}
