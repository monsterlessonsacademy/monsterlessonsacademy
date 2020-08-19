import {Component, Input, Output, EventEmitter} from '@angular/core'
import {UserInterface} from 'src/app/types/user.interface'

@Component({
  selector: 'app-users-list',
  templateUrl: './usersList.component.html',
  styleUrls: ['./usersList.component.scss']
})
export class UsersListComponent {
  @Input() users: UserInterface[]
  @Output() removeUser = new EventEmitter<string>()
  @Output() addUserEvent = new EventEmitter<string>()

  newUserName: string = ''

  setNewUserName(userName: string): void {
    this.newUserName = userName
  }

  addUser(): void {
    this.addUserEvent.emit(this.newUserName)
    this.newUserName = ''
  }
}
