import { createReducer, on } from '@ngrx/store';
import * as PostsActions from './actions';

const initialState = {
  isLoading: false,
};

export const reducers = createReducer(
  initialState,
  on(PostsActions.getPosts, (state) => ({ ...state, isLoading: true }))
);
