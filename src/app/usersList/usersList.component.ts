import {Component} from '@angular/core'

@Component({
  selector: 'app-users-list',
  templateUrl: './usersList.component.html'
})
export class UsersListComponent {
  // testUsers = ['Jack', 'John', 'Sam']
  users = [
    {
      id: '1',
      name: 'Jack',
      age: 21
    },
    {
      id: '2',
      name: 'John',
      age: 25
    },

    {
      id: '3',
      name: 'Sam',
      age: 29
    }
  ]
}
