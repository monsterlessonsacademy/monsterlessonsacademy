import { Component, Input } from '@angular/core';

@Component({
  selector: 'child',
  template: '<div>Child</div>',
})
export class ChildComponent {
  @Input() currentPage: number | undefined;
}
