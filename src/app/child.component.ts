import { Component } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  count = 0;

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
