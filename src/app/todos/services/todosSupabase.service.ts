import { Injectable } from '@angular/core';
import { Observable, from, map, tap } from 'rxjs';
import { TodoInterface } from '../types/todo.interface';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';
import { Database } from '../types/database.types';

@Injectable({ providedIn: 'root' })
export class TodosSupabaseService {
  private supabase = createClient<Database>(
    environment.supabaseUrl,
    environment.supabaseKey
  );

  getTodos(): Observable<TodoInterface[]> {
    const promise = this.supabase.from('todos').select('*');
    return from(promise).pipe(
      map((response) => {
        return response.data ?? [];
      })
    );
  }

  addTodo(text: string): Observable<TodoInterface> {
    const todoToCreate = { text, is_completed: false };

    const promise = this.supabase
      .from('todos')
      .insert(todoToCreate)
      .select('*')
      .single();
    return from(promise).pipe(map((result) => result.data!));
  }

  removeTodo(todoId: number): Observable<void> {
    const promise = this.supabase.from('todos').delete().match({ id: todoId });
    return from(promise).pipe(map(() => {}));
  }

  updateTodo(
    todoId: number,
    dataToUpdate: { text: string; is_completed: boolean }
  ): Observable<void> {
    const promise = this.supabase
      .from('todos')
      .update(dataToUpdate)
      .match({ id: todoId });
    return from(promise).pipe(map(() => {}));
  }
}
