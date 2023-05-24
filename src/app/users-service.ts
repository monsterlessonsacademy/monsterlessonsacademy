import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  getUsers() {
    return of([
      { id: '1', name: 'Foo' },
      { id: '2', name: 'Bar' },
    ]);
  }
}
