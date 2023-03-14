import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { adapter } from './reducers';

export const selectFeature = (state: AppStateInterface) => state.posts;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const postsSelector = createSelector(
  selectFeature,
  adapter.getSelectors().selectAll
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
