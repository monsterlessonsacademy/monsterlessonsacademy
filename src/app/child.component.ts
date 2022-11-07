import { Component, Input } from '@angular/core';

@Component({
  selector: 'child',
  template: '<div>{{currentPage}}</div>',
})
export class ChildComponent {
  @Input() currentPage: number = 0;
}
