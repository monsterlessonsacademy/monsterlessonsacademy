import { Component } from '@angular/core';
import { SlideInterface } from './imageSlider/types/slide.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  slides: SlideInterface[] = [
    { url: 'http://localhost:3000/image-1.jpg', title: 'beach' },
    { url: 'http://localhost:3000/image-2.jpg', title: 'boat' },
    { url: 'http://localhost:3000/image-3.jpg', title: 'forest' },
    { url: 'http://localhost:3000/image-4.jpg', title: 'city' },
    { url: 'http://localhost:3000/image-5.jpg', title: 'italy' },
  ];
}
