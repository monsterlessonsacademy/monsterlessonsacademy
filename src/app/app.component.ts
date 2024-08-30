import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CurrentUserService } from './currentUser.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  currentUserService = inject(CurrentUserService);
  ngOnInit(): void {
    setTimeout(() => {
      this.currentUserService.setCurrentUser();
    }, 2000);
  }
}
