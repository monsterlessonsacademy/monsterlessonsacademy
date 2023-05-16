import { Component, inject, OnInit } from '@angular/core';
import { MlaUsersService } from 'mla-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  usersService = inject(MlaUsersService);

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((res) => console.log(res));
  }
}
