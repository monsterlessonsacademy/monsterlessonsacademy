import { Component, Input } from '@angular/core';

@Component({
  selector: 'mla-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input({ required: true }) text = 'submit';
  @Input({ required: true }) icon!: string;
}
