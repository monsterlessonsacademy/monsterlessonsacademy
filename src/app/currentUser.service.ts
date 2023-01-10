import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CurrentUserService {
  currentUser$ = new BehaviorSubject<
    { id: string; name: string } | null | undefined
  >(undefined);

  setCurrentUser() {
    if (localStorage.getItem('token')) {
      this.currentUser$.next({ id: '1', name: 'Foo' });
    } else {
      this.currentUser$.next(null);
    }
  }
}
