import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>Current page: {{ currentPage }}</div>
    <div>Signal: {{ currentPageSig() }}</div>
    <div>Async pipe: {{ currentPage$ | async }}</div>
    <div>
      <button (click)="afterEvent = 999">Click me</button> {{ afterEvent }}
    </div>
  `,
})
export class ChildComponent implements OnInit {
  cdr = inject(ChangeDetectorRef);
  currentPage = 0;
  currentPageSig = signal(1);
  currentPage$ = interval(1000);
  afterEvent = 0;

  ngOnInit(): void {
    setTimeout(() => {
      this.currentPage += 1;
      this.cdr.markForCheck();
    }, 1000);

    setTimeout(() => {
      this.currentPageSig.set(2);
    }, 1000);
  }
}
