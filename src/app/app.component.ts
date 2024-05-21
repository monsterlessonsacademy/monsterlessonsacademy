import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortalExampleComponent } from './portal-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PortalExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
