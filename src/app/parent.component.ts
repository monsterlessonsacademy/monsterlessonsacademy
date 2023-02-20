import {
  Component,
  Host,
  Inject,
  OnInit,
  Optional,
  Self,
  SkipSelf,
} from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  viewProviders: [UsersService],
  // providers: [UsersService],
})
export class ParentComponent {
  // constructor(@Optional() private usersService: UsersService) {}
  // ngOnInit(): void {
  //   console.log(this.usersService?.usersKey);
  // }
  // constructor(@Self() private usersService: UsersService) {}
  // constructor(@Host() private usersService: UsersService) {}
}
