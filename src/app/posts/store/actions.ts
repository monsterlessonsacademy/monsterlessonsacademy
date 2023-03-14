import { createAction, props } from '@ngrx/store';
import { PostInterface } from '../types/post.interface';

export const getPosts = createAction('[Posts] Get Posts');
export const getPostsSuccess = createAction(
  '[Posts] Get Posts success',
  props<{ posts: PostInterface[] }>()
);
export const getPostsFailure = createAction(
  '[Posts] Get Posts failure',
  props<{ error: string }>()
);

export const createPost = createAction(
  '[Posts] Create Post',
  props<{ post: { title: string } }>()
);
export const createPostSuccess = createAction(
  '[Posts] Create Post success',
  props<{ post: PostInterface }>()
);
export const createPostFailure = createAction(
  '[Posts] Create Post failure',
  props<{ error: string }>()
);
