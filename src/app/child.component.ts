import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h2>Child {{ testRender() }}</h2>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  testRender() {
    console.log('testRender');
    return true;
  }
}
