import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {UserInterface} from 'src/app/types/user.interface'

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>('http://localhost:3000/users').pipe(
      map((users: UserInterface[]) => {
        return users.map(user => ({
          id: user.id,
          name: user.name,
          age: `${user.age} years old`
        }))
      })
    )
  }

  removeUser(id: string): Observable<{}> {
    return this.http.delete(`http://localhost:3000/users/${id}`)
  }

  addUser(name: string): Observable<UserInterface> {
    const user = {
      name,
      age: 30
    }
    return this.http.post<UserInterface>('http://localhost:3000/users', user)
  }
}
