import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { CurrentUserService } from './currentUser.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private currentUserService: CurrentUserService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.currentUserService.currentUser$.pipe(
      filter((currentUser) => currentUser !== undefined),
      map((currentUser) => {
        if (!currentUser) {
          this.router.navigateByUrl('/');
          return false;
        }
        return true;
      })
    );
  }
}
