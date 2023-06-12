import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  standalone: true,
})
export class PostsComponent implements OnInit, OnDestroy {
  data$ = interval(1000);
  unsubscribe$ = new Subject<void>();
  destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    // this.data$.pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
    //   console.log('data', data);
    // });
    this.data$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
      console.log('data', data);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
