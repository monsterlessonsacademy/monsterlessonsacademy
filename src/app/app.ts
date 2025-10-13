import { Component } from '@angular/core';
import { Slide } from './imageSlider/types/slide';
import { ImageSlider } from './imageSlider/image-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [ImageSlider],
})
export class App {
  slides: Slide[] = [
    { url: '/assets/image-1.webp', title: 'image-1' },
    { url: '/assets/image-2.webp', title: 'image-2' },
    { url: '/assets/image-3.webp', title: 'image-3' },
    { url: '/assets/image-4.webp', title: 'image-4' },
    { url: '/assets/image-5.webp', title: 'image-5' },
  ];
}
