import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    { id: '1', title: 'First post' },
    { id: '2', title: 'Second post' },
    { id: '3', title: 'Third post' },
  ];
}
