import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  interval,
  Subject,
  Subscription,
  take,
  takeUntil,
  takeWhile,
} from 'rxjs';
import { Unsub } from './unsub.class';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent extends Unsub implements OnInit {
  data$ = interval(1000);

  ngOnInit(): void {
    this.data$.pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
      console.log('data', data);
    });
  }
}
