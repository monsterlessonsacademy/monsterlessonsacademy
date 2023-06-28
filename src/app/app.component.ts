import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UsersService } from './users.service';
import { CommonModule } from '@angular/common';
import { UserInterface } from 'dist/mla-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
})
export class AppComponent implements OnInit {
  usersService = inject(UsersService);
  users$ = this.usersService.getUsers();

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => {
      console.log('users', users);
    });
  }

  addUser(): void {
    const id = Math.random().toString();
    const user: UserInterface = {
      id,
      name: id,
    };
    this.usersService.addUser(user);
  }
}
