import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h2>{{ name }} {{ testRender() }}</h2>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  @Input() name!: string;
  testRender() {
    console.log('testRender');
    return true;
  }
}
