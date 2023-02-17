import { Component, Inject, OnInit } from '@angular/core';
import {
  UsersServiceConfigInterface,
  USERS_SERVICE_CONFIG_TOKEN,
  USERS_SERVICE_TOKEN,
} from './app.module';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // constructor(private usersService: UsersService) {}
  constructor(
    // @Inject('USERS_SERVICE') private usersService: UsersService,
    // @Inject('CONFIG') private config: UsersServiceConfigInterface
    @Inject(USERS_SERVICE_TOKEN) private usersService: UsersService,
    @Inject(USERS_SERVICE_CONFIG_TOKEN)
    private config: UsersServiceConfigInterface
  ) {}

  ngOnInit(): void {
    console.log('config', this.config, this.usersService);
    this.usersService.getUsers().subscribe(console.log);
  }
}
