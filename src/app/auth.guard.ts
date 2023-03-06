import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { CurrentUserService } from './currentUser.service';

export const authGuard = () => {
  const router = inject(Router);
  const currentUserService = inject(CurrentUserService);

  return currentUserService.currentUser$.pipe(
    filter((currentUser) => currentUser !== undefined),
    map((currentUser) => {
      console.log('currentUser', currentUser);
      if (!currentUser) {
        router.navigateByUrl('/');
        return false;
      }
      return true;
    })
  );
};
