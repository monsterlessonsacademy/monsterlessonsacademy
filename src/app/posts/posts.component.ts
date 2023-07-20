import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from '../types/appState.interface';
import * as PostsActions from './store/actions';
import { selectError, selectIsLoading, selectPosts } from './store/reducers';
import { PostInterface } from './types/post.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class PostsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  posts$: Observable<PostInterface[]>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(selectIsLoading));
    this.error$ = this.store.pipe(select(selectError));
    this.posts$ = this.store.pipe(select(selectPosts));
  }

  ngOnInit(): void {
    this.store.dispatch(PostsActions.getPosts());
  }
}
