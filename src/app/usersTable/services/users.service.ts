import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SortingInterface } from '../types/sorting.interface';
import { UserInterface } from '../types/user.interface';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(
    sorting: SortingInterface,
    searchValue: string
  ): Observable<UserInterface[]> {
    const url = `http://localhost:3004/users?_sort=${sorting.column}&_order=${sorting.order}&name_like=${searchValue}`;
    return this.http.get<UserInterface[]>(url);
  }
}
