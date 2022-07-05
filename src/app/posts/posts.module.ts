import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { PostsComponent } from './components/posts/posts.component';
import { reducers } from './store/reducers';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('posts', reducers)],
  declarations: [PostsComponent],
  exports: [PostsComponent],
})
export class PostsModule {}
