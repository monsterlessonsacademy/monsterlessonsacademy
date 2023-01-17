import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SortingInterface } from '../types/sorting.interface';
import { UserSchema, UserType } from '../types/user.model';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(sorting: SortingInterface): Observable<UserType[]> {
    const url = `http://localhost:3004/users?_sort=${sorting.column}&_order=${sorting.order}`;
    return this.http.get<UserType[]>(url).pipe(
      map((users) => users.map((user) => UserSchema.parse(user))),
      map((users) => {
        return users.map((user) => ({
          ...user,
          name: user.name.toUpperCase(),
        }));
      })
    );
  }
}
