import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PostsComponent } from './components/posts/posts.component';
import { reducers } from './store/reducers';
import { PostsEffects } from './store/effects';
import { PostsService } from './services/posts.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature([PostsEffects]),
  ],
  providers: [PostsService],
  declarations: [PostsComponent],
  exports: [PostsComponent],
})
export class PostsModule {}
