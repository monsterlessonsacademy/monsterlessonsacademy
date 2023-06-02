import { computed, Injectable, signal } from '@angular/core';
import { TodoInterface } from '../types/todo.interface';
import { FilterEnum } from '../types/filter.enum';

@Injectable()
export class TodosService {
  filter = signal<FilterEnum>(FilterEnum.all);
  todos = signal<TodoInterface[]>([]);

  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      text,
      isCompleted: false,
      id: Math.random().toString(16),
    };
    this.todos.update((todos) => [...todos, newTodo]);
  }

  toggleAll(isCompleted: boolean): void {
    this.todos.update((todos) =>
      todos.map((todo) => ({ ...todo, isCompleted }))
    );
  }

  changeFilter(filterName: FilterEnum): void {
    this.filter.set(filterName);
  }

  changeTodo(id: string, text: string): void {
    this.todos.update((todos) =>
      todos.map((todo) => {
        return todo.id === id ? { ...todo, text } : todo;
      })
    );
  }

  removeTodo(id: string): void {
    this.todos.update((todos) => todos.filter((todo) => todo.id !== id));
  }

  toggleTodo(id: string): void {
    this.todos.update((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }
}
