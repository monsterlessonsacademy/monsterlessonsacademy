import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  patchState,
  signalState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { PostInterface } from './types/post.interface';
import { PostsService } from './services/posts.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { map, pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';

export interface PostsStateInterface {
  posts: PostInterface[];
  isLoading: boolean;
  error: string | null;
}

export const PostsStore = signalStore(
  withState<PostsStateInterface>({
    posts: [],
    error: null,
    isLoading: false,
  }),
  withComputed(({ posts }) => ({
    postsCount: computed(() => posts().length),
  })),
  withMethods((store, postsService = inject(PostsService)) => ({
    addPost(title: string) {
      const newPost: PostInterface = {
        id: crypto.randomUUID(),
        title,
      };
      const updatedPosts = [...store.posts(), newPost];
      patchState(store, { posts: updatedPosts });
    },
    removePost(id: string) {
      const updatedPosts = store.posts().filter((post) => post.id !== id);
      patchState(store, { posts: updatedPosts });
    },
    // addPosts(posts: PostInterface[]) {
    //   patchState(store, { posts });
    // },
    loadPosts: rxMethod<void>(
      pipe(
        switchMap(() => {
          return postsService.getPosts().pipe(
            tap((posts) => {
              patchState(store, { posts });
            })
          );
        })
      )
    ),
  })),
  withHooks({
    onInit(store) {
      store.loadPosts();
    },
  })
);

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  standalone: true,
  providers: [PostsStore],
  imports: [ReactiveFormsModule, CommonModule],
})
export class PostsComponent {
  fb = inject(FormBuilder);
  postsService = inject(PostsService);
  store = inject(PostsStore);
  addForm = this.fb.nonNullable.group({
    title: '',
  });
  // state = signalState<PostsStateInterface>({
  //   posts: [],
  //   error: null,
  //   isLoading: false,
  // });
  // ngOnInit(): void {
  //   this.postsService.getPosts().subscribe((posts) => {
  //     this.store.addPosts(posts);
  //   });
  // }

  onAdd(): void {
    // const newPost: PostInterface = {
    //   id: crypto.randomUUID(),
    //   title: this.addForm.getRawValue().title,
    // };
    // const updatedPosts = [...this.store.posts(), newPost];
    // patchState(this.store, { ...state, posts: updatedPosts });
    this.store.addPost(this.addForm.getRawValue().title);
    this.addForm.reset();
  }
}
