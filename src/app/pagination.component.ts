import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  computed,
  input,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'pagination',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <ul class="pagination">
      <li
        *ngFor="let page of pages()"
        [ngClass]="{ 'page-item': true, active: currentPage() === page }"
        (click)="changePage.emit(page)"
      >
        <span class="page-link">{{ page }}</span>
      </li>
    </ul>
  `,
})
export class PaginationComponent {
  @Output() changePage = new EventEmitter<number>();

  currentPage = input.required<number>();
  total = input.required<number>();
  limit = input.required<number>();
  pages = computed(() => {
    const pagesCount = Math.ceil(this.total() / this.limit());
    return this.range(1, pagesCount);
  });

  range(start: number, end: number): number[] {
    return [...Array(end - start).keys()].map((el) => el + start);
  }
}
