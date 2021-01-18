import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TodosService } from 'src/app/todos/services/todos';
import { FilterEnum } from 'src/app/todos/types/filter.enum';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  activeCount$: Observable<number>;
  noTodosClass$: Observable<boolean>;
  itemsLeftText$: Observable<string>;
  filterEnum = FilterEnum;

  constructor(private todosService: TodosService) {
    this.activeCount$ = this.todosService.todos$.pipe(
      map((todos) => todos.filter((todo) => !todo.isCompleted).length)
    );
    this.noTodosClass$ = this.todosService.todos$.pipe(
      map((todos) => todos.length === 0)
    );
    this.itemsLeftText$ = this.activeCount$.pipe(
      map((activeCount) => ` item${activeCount !== 1 ? 's' : ''} left`)
    );
  }

  getSelectedClass(filterName: string) {
    return this.todosService.filter$.pipe(
      map((filter) => filter === filterName)
    );
  }

  changeFilter(event: Event, filterName: FilterEnum): void {
    event.preventDefault();
    this.todosService.changeFilter(filterName);
  }
}
