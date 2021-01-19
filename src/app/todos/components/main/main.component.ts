import { Component } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TodosService } from 'src/app/todos/services/todos';
import { FilterEnum } from 'src/app/todos/types/filter.enum';
import { TodoInterface } from 'src/app/todos/types/todo.interface';

@Component({
  selector: 'app-todos-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  noTodosClass$: Observable<boolean>;
  isAllTodosSelected$: Observable<boolean>;
  editingId: string | null = null;
  visibleTodos$: Observable<TodoInterface[]>;

  constructor(private todosService: TodosService) {
    this.noTodosClass$ = this.todosService.todos$.pipe(
      map((todos) => todos.length === 0)
    );
    this.isAllTodosSelected$ = this.todosService.todos$.pipe(
      map((todos) => todos.every((todo) => todo.isCompleted))
    );
    this.visibleTodos$ = combineLatest([
      this.todosService.todos$,
      this.todosService.filter$,
    ]).pipe(
      map(([todos, filter]: [TodoInterface[], FilterEnum]) => {
        if (filter === FilterEnum.active) {
          return todos.filter((todo) => !todo.isCompleted);
        } else if (filter === FilterEnum.completed) {
          return todos.filter((todo) => todo.isCompleted);
        }
        return todos;
      })
    );
  }

  toggleAllTodos(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.todosService.toggleAll(target.checked);
  }

  setEditingId(editingId: string | null): void {
    this.editingId = editingId;
  }
}
