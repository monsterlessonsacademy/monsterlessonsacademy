import { Component } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'app-overlay-example',
  standalone: true,
  imports: [OverlayModule],
  template: `
    <button
      (click)="isOpen = !isOpen"
      type="button"
      cdkOverlayOrigin
      #trigger="cdkOverlayOrigin"
    >
      {{ isOpen ? 'Close' : 'Open' }}
    </button>

    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayOrigin]="trigger"
      [cdkConnectedOverlayOpen]="isOpen"
    >
      <ul class="example-list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </ng-template>
  `,
})
export class OverlayExampleComponent {
  isOpen = false;
}
