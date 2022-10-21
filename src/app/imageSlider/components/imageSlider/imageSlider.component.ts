import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SlideInterface } from '../../types/slide.interface';

@Component({
  selector: 'image-slider',
  templateUrl: './imageSlider.component.html',
  styleUrls: ['./imageSlider.component.css'],
})
export class ImageSliderComponent {
  @Input() slides: SlideInterface[] = [];

  goToPrevious(): void {}

  goToNext(): void {}

  goToSlide(slideIndex: number): void {}
}
