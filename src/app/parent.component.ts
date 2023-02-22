import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  viewProviders: [UsersService],
})
export class ParentComponent {}
