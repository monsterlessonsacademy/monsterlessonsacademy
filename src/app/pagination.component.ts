import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  computed,
  input,
  output,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import {
  outputFromObservable,
  outputToObservable,
} from '@angular/core/rxjs-interop';

@Component({
  selector: 'pagination',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <div>
      <ul class="pagination">
        <li
          *ngFor="let page of pages()"
          [ngClass]="{ 'page-item': true, active: currentPage() === page }"
          (click)="changePage.emit(page)"
        >
          <span class="page-link">{{ page }}</span>
        </li>
      </ul>
      <input (keydown.enter)="addItem($event)" />
    </div>
  `,
})
export class PaginationComponent implements OnInit {
  // @Output() changePage = new EventEmitter<number>();
  changePage = output<number>();
  currentPage = input.required<number>();
  total = input.required<number>();
  limit = input.required<number>();
  pages = computed(() => {
    const pagesCount = Math.ceil(this.total() / this.limit());
    return this.range(1, pagesCount);
  });
  items$ = new BehaviorSubject<string[]>([]);
  itemsChange = outputFromObservable(this.items$);
  changePage$ = outputToObservable(this.changePage);

  ngOnInit(): void {
    this.items$.subscribe((items) => {
      console.log('items', items);
    });

    this.changePage$.subscribe((page) => {
      console.log('change page was triggered', page);
    });
  }

  range(start: number, end: number): number[] {
    return [...Array(end - start).keys()].map((el) => el + start);
  }

  addItem(event: Event) {
    const target = event.target as HTMLInputElement;
    const updatedItems = [...this.items$.getValue(), target.value];
    this.items$.next(updatedItems);
  }
}
