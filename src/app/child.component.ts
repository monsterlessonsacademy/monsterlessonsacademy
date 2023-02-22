import {
  Component,
  Host,
  OnInit,
  Optional,
  Self,
  SkipSelf,
} from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit {
  constructor(@Host() private usersService: UsersService) {}

  ngOnInit(): void {
    console.log('key', this.usersService?.usersKey ?? 'not set');
  }
}
