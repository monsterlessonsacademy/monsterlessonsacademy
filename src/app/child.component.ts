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
  selector: 'child',
  templateUrl: './child.component.html',
  // providers: [UsersService],
})
export class ChildComponent implements OnInit {
  // constructor(@Optional() private usersService: UsersService) {}
  // ngOnInit(): void {
  //   console.log(this.usersService?.usersKey);
  // }
  // constructor(@Self() private usersService: UsersService) {}
  // constructor(@SkipSelf() private usersService: UsersService) {}
  // constructor(@Host() private usersService: UsersService) {}

  ngOnInit(): void {
    // console.log(this.usersService?.usersKey);
  }
}
