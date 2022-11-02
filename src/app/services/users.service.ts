import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { UserInterface } from '../types/user.interface';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  fetchUsers(sort: Sort): Observable<UserInterface[]> {
    const params = new HttpParams()
      .set('_sort', sort.active)
      .set('_order', sort.direction);
    return this.http.get<UserInterface[]>('http://localhost:3004/users', {
      params,
    });
  }

  getUsers(): UserInterface[] {
    return [
      {
        id: '1',
        name: 'Jack',
        age: 25,
      },
      {
        id: '2',
        name: 'John',
        age: 20,
      },
      {
        id: '3',
        name: 'Mike',
        age: 30,
      },
      {
        id: '4',
        name: 'Peter',
        age: 25,
      },
      {
        id: '5',
        name: 'Olaf',
        age: 31,
      },
    ];
  }
}
