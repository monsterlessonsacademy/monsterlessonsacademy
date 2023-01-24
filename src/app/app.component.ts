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
    console.log('mouseDown');
    this.element = event.target;
    this.zone.runOutsideAngular(() => {
      window.document.addEventListener('mousemove', this.mouseMove);
    });
  }

  mouseMove = (event: any) => {
    event.preventDefault();
    this.element.setAttribute('x', event.clientX);
    this.element.setAttribute('y', event.clientY);
  };

  mouseUp(event: any) {
    this.zone.run(() => {
      this.position = {
        x: this.element.getAttribute('x'),
        y: this.element.getAttribute('y'),
      };
    });
    console.log('!!', this.mouseMove);
    window.document.removeEventListener('mousemove', this.mouseMove);
  }
}
