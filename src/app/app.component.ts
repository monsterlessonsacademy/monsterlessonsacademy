import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child.component';
import { PortalExampleComponent } from './portal-example.component';
import { OverlayExampleComponent } from './overlay-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ChildComponent,
    PortalExampleComponent,
    OverlayExampleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
