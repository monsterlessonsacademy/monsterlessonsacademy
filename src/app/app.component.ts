import {
  AfterViewInit,
  Component,
  Directive,
  ElementRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Directive({
  selector: '[highlight]',
  standalone: true,
})
export class HighlightDirective implements AfterViewInit {
  elementRef = inject(ElementRef);

  ngAfterViewInit() {
    console.log(this.elementRef);
    this.elementRef.nativeElement.style.background = 'yellow';
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isActive = true;
  name = 'foo';
  changeName(): void {
    this.name = 'bar';
  }
  users = [
    { id: 1, title: 'foo' },
    { id: 2, title: 'bar' },
    { id: 3, title: 'baz' },
  ];
  role = 'admin';
}
