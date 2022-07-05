import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as PostsActions from '../../store/actions';
import {
  errorSelector,
  isLoadingSelector,
  postsSelector,
} from '../../store/selectors';
import { PostInterface } from '../../types/post.interface';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  posts$: Observable<PostInterface[]>;
  error$: Observable<string | null>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.posts$ = this.store.pipe(select(postsSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(PostsActions.getPosts());

    this.posts$.subscribe((res) => {
      console.log('res', res);
    });
  }
}
