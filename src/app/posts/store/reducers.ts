import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { PostInterface } from '../types/post.interface';
import { PostsStateInterface } from '../types/postsState.interface';
import * as PostsActions from './actions';

export const adapter: EntityAdapter<PostInterface> = createEntityAdapter<PostInterface>();

export const initialState: PostsStateInterface = adapter.getInitialState({
  isLoading: false,
  error: null,
});

export const reducers = createReducer(
  initialState,
  on(PostsActions.getPosts, (state) => ({ ...state, isLoading: true })),
  on(PostsActions.getPostsSuccess, (state, action) => {
    return adapter.addMany(action.posts, { ...state, isLoading: false });
  }),
  on(PostsActions.getPostsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(PostsActions.createPostSuccess, (state, action) => {
    return adapter.addOne(action.post, { ...state, isLoading: false });
  })
);
