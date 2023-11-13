import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: 'Child',
})
export class ChildComponent {}
