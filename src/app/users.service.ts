import { Injectable } from '@angular/core';
import { UserInterface } from 'dist/mla-users';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  getUsers(): Observable<UserInterface[]> {
    return of([
      { id: '1', name: 'Jack' },
      { id: '2', name: 'John' },
    ]);
  }
}
