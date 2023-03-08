import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from '../bar/bar.component';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [CommonModule, BarComponent],
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css'],
})
export class FooComponent {}
