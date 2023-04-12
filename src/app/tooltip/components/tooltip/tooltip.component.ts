import { Component, Input } from '@angular/core';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
})
export class TooltipComponent {
  @Input() text = '';
  @Input() left = 0;
  @Input() top = 0;
}
