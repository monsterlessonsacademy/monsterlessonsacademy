import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { exhaustMap, Observable, tap } from 'rxjs';
import { PostsService } from '../../services/posts.service';
import { PostInterface } from '../../types/post.interface';

export interface PostsComponentState {
  isLoading: boolean;
  error: string | null;
  posts: PostInterface[];
}

@Injectable()
export class PostsStore extends ComponentStore<PostsComponentState> {
  private isLoading$ = this.select((state) => state.isLoading);
  private error$ = this.select((state) => state.error);
  private posts$ = this.select((state) => state.posts);
  vm$ = this.select({
    isLoading: this.isLoading$,
    error: this.error$,
    posts: this.posts$,
  });
  setIsLoading = this.updater((state) => ({ ...state, isLoading: true }));
  setError = this.updater((state, error: HttpErrorResponse) => ({
    ...state,
    isLoading: false,
    error: error.message,
  }));
  addPosts = this.updater((state, posts: PostInterface[]) => ({
    ...state,
    isLoading: false,
    posts,
  }));
  addPost = this.updater((state, post: PostInterface) => ({
    ...state,
    isLoading: false,
    posts: [...state.posts, post],
  }));

  getPosts = this.effect((trigger$) => {
    return trigger$.pipe(
      tap(() => {
        this.setIsLoading();
      }),
      exhaustMap(() => {
        return this.postsService.getPosts().pipe(
          tapResponse(
            (posts) => this.addPosts(posts),
            (err: HttpErrorResponse) => this.setError(err)
          )
        );
      })
    );
  });

  createPost = this.effect((post$: Observable<{ title: string }>) => {
    return post$.pipe(
      tap(() => {
        this.setIsLoading();
      }),
      exhaustMap((post) => {
        return this.postsService.createPost(post).pipe(
          tapResponse(
            (post) => this.addPost(post),
            (err: HttpErrorResponse) => this.setError(err)
          )
        );
      })
    );
  });

  constructor(private postsService: PostsService) {
    super({
      isLoading: false,
      error: null,
      posts: [],
    });
  }
}
