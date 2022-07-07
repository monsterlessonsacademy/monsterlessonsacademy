import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './services/posts.service';
import { PostsEffects } from './store/effects';
import { reducers } from './store/reducers';

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
