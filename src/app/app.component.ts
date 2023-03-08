import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooComponent } from './foo/foo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FooComponent, RouterOutlet, RouterLink],
})
export class AppComponent {
  title = 'app';
}
