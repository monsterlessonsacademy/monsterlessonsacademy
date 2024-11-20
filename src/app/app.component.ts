import { Component, computed, linkedSignal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  initialUsers = [
    { id: '1', name: 'Jack' },
    { id: '2', name: 'John' },
    { id: '3', name: 'Mike' },
  ];
  users = signal(this.initialUsers);
  userNames = computed(() => this.users().map((user) => user.name));
  linkedUserNames = linkedSignal(() => this.users().map((user) => user.name));

  changeLinkedUserNames(): void {
    this.linkedUserNames.set([...this.linkedUserNames(), 'fooo']);
  }

  changeUsers(): void {
    this.users.set([...this.initialUsers, { id: '4', name: 'Baz' }]);
  }
}
