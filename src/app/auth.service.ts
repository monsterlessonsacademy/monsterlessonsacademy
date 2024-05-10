import { Injectable, signal } from '@angular/core';
import { AuthResponse, createClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUserSig = signal<any>(null);
  supabase = createClient(environment.supabaseUrl, environment.supabaseKey);

  register(
    email: string,
    username: string,
    password: string
  ): Observable<AuthResponse> {
    const promise = this.supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    });
    return from(promise);
  }

  login(email: string, password: string): Observable<AuthResponse> {
    const promise = this.supabase.auth.signInWithPassword({
      email,
      password,
    });
    return from(promise);
  }

  logout() {
    this.supabase.auth.signOut();
  }
}
