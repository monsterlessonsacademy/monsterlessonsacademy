import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  filter,
  fromEvent,
  map,
  of,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users$ = of([
    { id: '1', name: 'John', isActive: true },
    { id: '2', name: 'Jack', isActive: true },
    { id: '2', name: 'Mike', isActive: true },
  ]);

  usernames$ = this.users$.pipe(map((users) => users.map((user) => user.name)));

  user$ = new BehaviorSubject<{ id: string; name: string } | null>(null);

  filteredUsers$ = this.users$.pipe(
    filter((users) => users.every((user) => user.isActive))
  );

  documentClick$ = fromEvent(document, 'click');

  data$ = combineLatest([
    this.users$,
    this.usernames$,
    this.filteredUsers$,
  ]).pipe(
    map(([users, usernames, filteredUsers]) => ({
      users,
      usernames,
      filteredUsers,
    }))
  );

  ngOnInit(): void {
    this.data$.subscribe((data) => {
      console.log('data', data);
    });
    // setTimeout(() => {
    //   this.user$.next({ id: '1', name: 'John' });
    // }, 2000);
  }
}
