import { Component } from '@angular/core';
import { SlideInterface } from './imageSlider/types/slide.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  slides: SlideInterface[] = [
    { url: '/assets/image-1.jpeg', title: 'beach' },
    { url: '/assets/image-2.jpeg', title: 'boat' },
    { url: '/assets/image-3.jpeg', title: 'forest' },
    { url: '/assets/image-4.jpeg', title: 'city' },
    { url: '/assets/image-5.jpeg', title: 'italy' },
  ];
}
