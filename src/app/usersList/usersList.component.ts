import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'app-users-list',
  templateUrl: './usersList.component.html',
  styleUrls: ['./usersList.component.scss']
})
export class UsersListComponent {
  @Input() users
  @Output() removeUser = new EventEmitter()
  @Output() addUserEvent = new EventEmitter()

  newUserName: string = ''

  setNewUserName(userName: string): void {
    this.newUserName = userName
  }

  addUser(): void {
    this.addUserEvent.emit(this.newUserName)
    this.newUserName = ''
  }
}
