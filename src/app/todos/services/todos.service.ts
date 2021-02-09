import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoInterface } from '../types/todo.interface';

@Injectable()
export class TodosService {
  todos$ = new BehaviorSubject<TodoInterface[]>([]);
}
