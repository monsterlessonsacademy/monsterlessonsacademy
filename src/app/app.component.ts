import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from './currentUser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private currentUserService: CurrentUserService) {}

  ngOnInit(): void {
    this.currentUserService.setCurrentUser();
  }
}
