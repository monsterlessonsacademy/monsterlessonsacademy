import { Component, computed, effect, input, signal, untracked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide } from './types/slide';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './image-slider.css',
  templateUrl: './image-slider.html',
})
export class ImageSlider {
  slides = input.required<Slide[]>();
  parentWidth = input.required<number>();

  currentIndex = signal(0);
  slidesContainerStyles = computed(() => ({
    width: `${this.parentWidth() * this.slides().length}px`,
    transform: `translateX(-${this.currentIndex() * this.parentWidth()}px)`,
  }));
  timeoutId = signal<number | undefined>(undefined);
  timeoutEffect = effect(() => {
    const index = this.currentIndex();
    const prevId = untracked(() => this.timeoutId());
    window.clearTimeout(prevId);
    const id = window.setTimeout(() => {
      this.goToNext();
    }, 2000);
    untracked(() => this.timeoutId.set(id));
  });

  getSlideStyle = (slide: Slide) => ({
    backgroundImage: `url(${slide.url})`,
    width: `${this.parentWidth()}px`,
  });

  goToPrevious(): void {
    const isFirst = this.currentIndex() === 0;
    const newIndex = isFirst ? this.slides().length - 1 : this.currentIndex() - 1;
    this.currentIndex.set(newIndex);
  }

  goToNext(): void {
    const isLast = this.currentIndex() === this.slides().length - 1;
    const newIndex = isLast ? 0 : this.currentIndex() + 1;
    this.currentIndex.set(newIndex);
  }

  goToSlide(index: number): void {
    this.currentIndex.set(index);
  }
}
