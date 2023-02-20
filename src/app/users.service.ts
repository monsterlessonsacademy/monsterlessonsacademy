import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  usersKey = 'users';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('http://localhost:3004/users');
  }
}
