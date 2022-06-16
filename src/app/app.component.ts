import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  article: { title: string } | null = { title: 'Foo' };

  numbers = [1, 2, 3];
}
