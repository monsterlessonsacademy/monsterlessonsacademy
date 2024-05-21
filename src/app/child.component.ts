import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  template: `Hello user {{ user }}`,
})
export class ContentComponent {
  user = 'foo';
}

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [ModalComponent, CommonModule, ContentComponent],
  template: `
    <div>
      <h2>Child</h2>
      <button (click)="openModal()">Open modal</button>
      <app-modal *ngIf="isModalOpened" (closeModal)="closeModal()">
        <ng-container modal-header> This is our header </ng-container>
        <ng-container modal-body> <app-content /> </ng-container>
      </app-modal>
    </div>
  `,
})
export class ChildComponent {
  isModalOpened = false;
  openModal(): void {
    this.isModalOpened = true;
  }

  closeModal(): void {
    this.isModalOpened = false;
  }
}
