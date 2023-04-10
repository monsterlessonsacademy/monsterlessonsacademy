import { Component, Input } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() size? = 'md';
  @Input() title? = 'Modal title';
}
