import { Injectable, Signal, computed, signal } from '@angular/core';
import { UserInterface } from 'dist/mla-users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usersSig = signal<UserInterface[]>([]);

  getUsers(): Signal<UserInterface[]> {
    return computed(this.usersSig);
  }

  addUser(user: UserInterface): void {
    this.usersSig.update((users) => [...users, user]);
  }

  removeUser(userId: string): void {
    const updatedUsers = this.usersSig().filter((user) => user.id !== userId);
    this.usersSig.set(updatedUsers);
  }
}
