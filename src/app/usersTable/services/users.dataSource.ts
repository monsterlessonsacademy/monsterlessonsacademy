import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInterface } from '../types/user.interface';
import { UsersService } from './users.service';

@Injectable()
export class UsersDataSource extends DataSource<UserInterface> {
  users$ = new BehaviorSubject<UserInterface[]>([]);
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private usersService: UsersService) {
    super();
  }

  connect(): Observable<UserInterface[]> {
    return this.users$.asObservable();
  }

  disconnect(): void {
    this.users$.complete();
  }

  loadUsers(sort: Sort): void {
    this.isLoading$.next(true);
    this.usersService.fetchUsers(sort).subscribe((users) => {
      this.users$.next(users);
      this.isLoading$.next(false);
    });
  }
}
