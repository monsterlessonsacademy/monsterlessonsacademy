import {Component} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {UserInterface} from 'src/app/types/user.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: UserInterface[] = []

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('ngOnInit')
    this.http
      .get('http://localhost:3000/users')
      .subscribe((users: UserInterface[]) => {
        console.log('res', users)
        this.users = users
      })
  }

  removeUser(id: string): void {
    this.users = this.users.filter(user => user.id !== id)
  }

  addUser(name: string): void {
    const uniqueId = Math.random().toString(16)
    const newUser: UserInterface = {
      id: uniqueId,
      name,
      age: 30
    }
    this.users.push(newUser)
  }
}
