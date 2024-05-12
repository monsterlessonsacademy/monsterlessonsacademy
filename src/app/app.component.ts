import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  authService = inject(AuthService);
  ngOnInit(): void {
    this.authService.supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        this.authService.currentUser.set({
          email: session?.user.email!,
          username:
            session?.user.identities?.at(0)?.identity_data?.['username'],
        });
      } else if (event === 'SIGNED_OUT') {
        this.authService.currentUser.set(null);
      }
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
