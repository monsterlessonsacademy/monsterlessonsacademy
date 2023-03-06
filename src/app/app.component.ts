import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CurrentUserService } from './currentUser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  providers: [CurrentUserService],
})
export class AppComponent implements OnInit {
  constructor(private currentUserService: CurrentUserService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.currentUserService.setCurrentUser();
    }, 2000);
  }
}
