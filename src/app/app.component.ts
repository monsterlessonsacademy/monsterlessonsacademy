import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UsersService } from './users.service';
import { CommonModule } from '@angular/common';
import { UserInterface } from 'dist/mla-users';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, ReactiveFormsModule],
})
export class AppComponent {
  usersService = inject(UsersService);
  fb = inject(FormBuilder);
  addForm = this.fb.nonNullable.group({
    name: '',
  });
  usersSig = this.usersService.getUsers();

  onUserAdd(): void {
    const user: UserInterface = {
      id: Math.random().toString(),
      name: this.addForm.getRawValue().name,
    };
    this.usersService.addUser(user);
    this.addForm.reset();
  }

  removeUser(userId: string): void {
    this.usersService.removeUser(userId);
  }
}
