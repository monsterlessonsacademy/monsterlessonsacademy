import { Component, input, signal, effect, computed, OnDestroy, untracked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide } from './types/slide';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './image-slider.css',
  templateUrl: './image-slider.html',
})
export class ImageSlider implements OnDestroy {
  slides = input.required<Slide[]>();
  parentWidth = input.required<number>();

  currentIndex = signal(0);
  timeoutId = signal<number | undefined>(undefined);

  slidesContainerStyles = computed(() => ({
    width: `${this.parentWidth() * this.slides().length}px`,
    transform: `translateX(-${this.currentIndex() * this.parentWidth()}px)`,
  }));

  slideStyle = (slide: Slide) => ({
    backgroundImage: `url(${slide.url})`,
    width: `${this.parentWidth()}px`,
  });

  constructor() {
    effect(() => {
      const prevId = untracked(() => this.timeoutId());
      if (prevId) window.clearTimeout(prevId);

      const id = window.setTimeout(() => this.goToNext(), 2000);
      untracked(() => this.timeoutId.set(id));
    });
  }

  ngOnDestroy() {
    window.clearTimeout(this.timeoutId());
  }

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
