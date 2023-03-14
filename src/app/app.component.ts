import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

interface UserInterface {
  id: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users$ = new BehaviorSubject<UserInterface[]>([]);
  subject$ = new Subject<UserInterface[]>();

  ngOnInit(): void {
    this.users$.subscribe((users) => {
      console.log('users', users);
    });

    this.subject$.subscribe((users) => {
      console.log('users from subject', users);
    });

    setTimeout(() => {
      this.users$.next([{ id: '1', name: 'Foo' }]);
      this.subject$.next([{ id: '1', name: 'Foo' }]);
      console.log('setTimeout', this.users$.getValue());
    }, 2000);
  }
}
