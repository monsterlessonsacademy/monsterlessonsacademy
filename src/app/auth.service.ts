import { Injectable, signal } from '@angular/core';
import { CurrentUserInterface } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUserSig = signal<CurrentUserInterface | null | undefined>(undefined);
}
