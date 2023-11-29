import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'progressive-image',
  templateUrl: './progressiveImage.component.html',
  styleUrls: ['./progressiveImage.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ProgressiveImage {
  @Input({ required: true }) imageUrl!: string;
  @Input({ required: true }) imageUrlSmall!: string;

  isLoaded = false;

  onImageLoad(): void {
    this.isLoaded = true;
  }
}
