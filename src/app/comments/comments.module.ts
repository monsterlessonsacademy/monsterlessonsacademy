import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommentComponent } from './components/comment/comment.component';
import { CommentFormComponent } from './components/commentForm/commentForm.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsService } from './services/comments.service';

const routes = [
  {
    path: '',
    component: CommentsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [CommentsComponent, CommentComponent, CommentFormComponent],
  providers: [CommentsService],
})
export class CommentsModule {}
