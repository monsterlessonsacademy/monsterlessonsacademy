import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentsService } from '../../services/comments.service';
import { CommentInterface } from '../../types/comment.interface';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
})
export class CommentsComponent {
  rootComments$: Observable<CommentInterface[]>;

  constructor(private commentsService: CommentsService) {
    this.
  }


  updateComment(): void {}

  deleteComment(): void {}

  setActiveComment(): void {}

  addComment(foo: any): void {}
}
