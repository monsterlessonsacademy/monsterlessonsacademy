import { NgModule } from '@angular/core';
import { CommentsService } from './services/comments.service';

@NgModule({
  providers: [CommentsService],
})
export class CommentsModule {}
