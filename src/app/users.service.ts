import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { UserInterface } from 'dist/mla-users';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ArticleInterface } from './article.interface';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  http = inject(HttpClient);
  // private users$ = new BehaviorSubject<UserInterface[]>([]);
  private usersSig = signal<UserInterface[]>([]);

  getArticles(): Observable<ArticleInterface[]> {
    return this.http
      .get<{ articles: ArticleInterface[] }>(
        'https://conduit.productionready.io/api/articles/feed?limit=10&offset=0'
      )
      .pipe(map((response) => response.articles));
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
