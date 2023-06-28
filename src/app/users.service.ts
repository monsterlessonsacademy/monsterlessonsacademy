import { Injectable, Signal, computed, signal } from '@angular/core';
import { UserInterface } from 'dist/mla-users';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // private users$ = new BehaviorSubject<UserInterface[]>([]);
  private usersSig = signal<UserInterface[]>([]);

  getUsers(): Signal<UserInterface[]> {
    return computed(this.usersSig);
  }

  addUser(user: UserInterface): void {
    this.usersSig.update((users) => [...users, user]);
  }

  removeUser(userId: string): void {
    this.usersSig.update((users) => users.filter((user) => user.id !== userId));
  }

  // getUsers(): Observable<UserInterface[]> {
  //   return this.users$.asObservable();
  // }

  // addUser(user: UserInterface): void {
  //   const updatedUsers = [...this.users$.getValue(), user];
  //   this.users$.next(updatedUsers);
  // }

  // removeUser(userId: string): void {
  //   const updatedUsers = this.users$
  //     .getValue()
  //     .filter((user) => user.id !== userId);
  //   this.users$.next(updatedUsers);
  // }
}
