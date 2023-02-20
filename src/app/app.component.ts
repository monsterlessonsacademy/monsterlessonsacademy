import { Component, Inject } from '@angular/core';
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
export class AppComponent {
  constructor(
    @Inject(USERS_SERVICE_TOKEN) private usersService: UsersService,
    @Inject(USERS_SERVICE_CONFIG_TOKEN)
    private config: UsersServiceConfigInterface
  ) {
    console.log('usersService', usersService, config);
  }
}
