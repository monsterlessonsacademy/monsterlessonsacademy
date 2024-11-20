import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<div>Child {{isActive}}</div>',
})
export class ChildComponent {
  @Input() isActive = false;
}
