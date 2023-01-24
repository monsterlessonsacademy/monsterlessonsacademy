import { Component, NgZone, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('element', { static: true }) element: any;
  position: any;

  constructor(private zone: NgZone) {}

  mouseDown(event: any) {
    this.zone.runOutsideAngular(() => {
      window.document.addEventListener('mousemove', this.mouseMove.bind(this));
    });
  }

  mouseMove(event: any) {
    this.element.nativeElement.setAttribute('x', event.clientX);
    this.element.nativeElement.setAttribute('y', event.clientY);
  }

  mouseUp(event: any) {
    this.zone.run(() => {
      this.position = {
        x: this.element.nativeElement.getAttribute('x'),
        y: this.element.nativeElement.getAttribute('y'),
      };
    });

    window.document.removeEventListener('mousemove', this.mouseMove);
  }
}
