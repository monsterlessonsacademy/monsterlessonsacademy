import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { UserInterface } from './user.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  authService = inject(AuthService);
  http = inject(HttpClient);

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,
        });
      } else {
        this.authService.currentUserSig.set(null);
      }
    });
    // this.http
    //   .get<{ user: UserInterface }>('https://api.realworld.io/api/user')
    //   .subscribe({
    //     next: (response) => {
    //       console.log('response', response);
    //       this.authService.currentUserSig.set(response.user);
    //     },
    //     error: () => {
    //       this.authService.currentUserSig.set(null);
    //     },
    //   });
  }

  logout(): void {
    this.authService.logout();
  }
}
