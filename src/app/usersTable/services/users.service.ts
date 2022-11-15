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
}
