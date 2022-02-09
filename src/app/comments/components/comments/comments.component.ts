import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentsService } from '../../services/comments.service';
import { CommentInterface } from '../../types/comment.interface';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
})
export class CommentsComponent implements OnInit {
  comments: CommentInterface[] = [];
  rootComments: CommentInterface[] = [];

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.commentsService.getComments().subscribe((comments) => {
      this.comments = comments;
      this.rootComments = comments.filter(
        (comment) => comment.parentId === null
      );
    });
  }

  updateComment(): void {}

  deleteComment(): void {}

  setActiveComment(): void {}

  addComment(foo: any): void {}
}
