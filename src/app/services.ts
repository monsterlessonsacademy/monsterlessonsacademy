import { inject } from '@angular/core';
import { UsersService } from './users-service';

export class Foo {
  usersService = inject(UsersService);
}

export class Bar extends Foo {}
